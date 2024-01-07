import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    updateDoc,
    where,
  } from "firebase/firestore";
  import { createContext, useState } from "react";
  import { db } from "../Config/firebaseConfig";
  import Swal from "sweetalert2";
  
  //Contexto que maneja el I/O de la base de datos y verificaciones de integridad de la información
  
  export const FirebaseContext = createContext(null);
  
  export const FirebaseContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    const getProductsDB = (category) => {
      const myProducts = category
        ? query(collection(db, "products"), where("category", "==", category))
        : query(collection(db, "products"));
      getDocs(myProducts).then((resp) => {
        if (resp.size === 0) {
          console.log("No hay productos en la base de datos");
        }
        const productList = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
        setIsLoading(false);
      });
    };
  
    const getProductById = (id) => {
      const productRef = doc(db, "products", id);
      getDoc(productRef).then((resp) => {
        // Verificar si el producto existe
        if (resp.exists()) {
          const prod = {
            id: resp.id,
            ...resp.data(),
          };
          setProduct(prod);
        }
      });
    };
  
    const discountStock = async (product) => {
      const productRef = doc(db, "products", product.id);
      const newStock = product.stock - 1;
      await updateDoc(productRef, { stock: newStock });
    };
  
    const addOrderDB = async (cartProducts, userData, total) => {
      try {
        if (
          !userData ||
          Object.keys(userData).length === 0 ||
          !userData.name ||
          !userData.surname ||
          !userData.phone ||
          !userData.email
        ) {
          // Mostrar alerta si userData no contiene datos completos
          Swal.fire({
            icon: "warning",
            title: "Datos del usuario incompletos",
            text: "Por favor, completa todos los datos del usuario antes de completar la orden.",
          });
          return; // Salir de la función si userData no contiene datos completos
        }
  
        if (!cartProducts || cartProducts.length === 0) {
          // Mostrar alerta si no hay datos en cartProducts
          Swal.fire({
            icon: "warning",
            title: "Carrito vacío",
            text: "No hay productos en el carrito. Agrega productos antes de completar la orden.",
          });
          return; // Salir de la función si no hay productos en el carrito
        }
  
        const newOrder = {
          buyer: userData,
          items: cartProducts,
          data: serverTimestamp(),
          total,
        };
  
        const docRef = await addDoc(collection(db, "orders"), newOrder);
        const orderId = docRef.id;
        Swal.fire({
          icon: "success",
          title: "Orden completada",
          text: `Tu número de orden es: ${orderId}.\n Gracias por su Compra!`,
        });
  
        return orderId;
      } catch (error) {
        console.error("Error al agregar la orden a la base de datos:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al procesar la orden. Por favor, inténtalo nuevamente.",
        });
  
        throw error;
      }
    };
  
    const objetValue = {
      products,
      product,
      isLoading,
      getProductsDB,
      getProductById,
      discountStock,
      addOrderDB,
    };
  
    return (
      <FirebaseContext.Provider value={objetValue}>
        {" "}
        {children}{" "}
      </FirebaseContext.Provider>
    );
  };
  
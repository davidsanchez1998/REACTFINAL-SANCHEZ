import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import cargando from "../../assets/img/cargando.gif";
import { db } from "../../Config/firebaseConfig";
import { ItemList } from "../ItemList/ItemList";
import { ItemDetail } from "../ItemDetail/ItemDetail";

//Componente que busca el producto por ID, en caso de encontrarlo envia la información a ItemDetail

export const ProductsById = ({ id }) => {
  const [productId, setProducts] = useState([]);

  const getProductBDId = (idProduct) => {
    const myProduct = idProduct
      ? query(collection(db, "products"), where("id", "==", id))
      : query(collection(db, "products"));

    getDocs(myProduct)
      .then((resp) => {
        const myProduct = {
          id: resp.docs[0].id,
          ...resp.docs[0].data(),
        };
        setIsLoading(false);

        setProducts(myProduct);
      })

      .catch((error) => alert("NO EXISTE DICHO PRODUCTO")),
      setIsLoading(false);
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getProductBDId(id);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center">
          <img className="cargando" src={cargando} alt="cargando" />
        </div>
      ) : (
        <ItemDetail key={productId.id} {...productId} />
      )}
    </>
  );
};

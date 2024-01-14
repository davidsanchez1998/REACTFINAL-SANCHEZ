import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext(null);

//Contexto del carrito

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    const { id, name, price } = item;

    const index = cartItems.findIndex((product) => product.id === id);

    if (index !== -1) {
      const cartItemsCopy = [...cartItems];
      cartItemsCopy[index].quantity += quantity;
      cartItemsCopy[index].subTotal =
        cartItemsCopy[index].quantity * cartItemsCopy[index].price;
      setCartItems(cartItemsCopy);
    } else {
      const newItem = {
        id,
        name,
        price,
        quantity,
        subTotal: quantity * price,
      };

      setCartItems([...cartItems, newItem]);
    }

    Swal.fire({
      title: "Ítem agregado!",
      text: "Se ha añadido al carrito.",
      icon: "success",
      timer: 1400,
    });
  };

  const removeItem = (id) => {
    const arrayFilter = cartItems.filter((item) => item.id !== id);
    setCartItems(arrayFilter);

    Swal.fire({
      title: "¡Producto eliminado!",
      text: "El producto se ha eliminado del carrito.",
      icon: "info",
      timer: 2000,
    });
  };

  const clearCartItems = () => {
    setCartItems([]);
  };

  const handleTotal = () => {
    const total = cartItems.reduce((acum, item) => acum + item.subTotal, 0);
    setTotalCartItems(total);
  };

  const handleTotalQuantity = () => {
    const total = cartItems.reduce((acum, item) => acum + item.quantity, 0);
    setTotalQuantity(total);
  };

  useEffect(() => {
    handleTotal();
    handleTotalQuantity();
  }, [cartItems]);

  const objetValue = {
    cartItems,
    totalCartItems,
    totalQuantity,
    addItem,
    removeItem,
    clearCartItems,
  };

  return (
    <CartContext.Provider value={objetValue}> {children} </CartContext.Provider>
  );
};

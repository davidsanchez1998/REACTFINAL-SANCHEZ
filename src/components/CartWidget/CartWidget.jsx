import  "./cartwidget.css"
import React, { useContext } from "react";
//muestra el carrito de compra con el número de items cargados 
import { CartContext } from "../../context/CartContext";
export const CartWidget = () => {
  const { totalQuantity } = useContext( CartContext);
  


  return (
    <div className="container">
      
        <div className="col-12 d-flex justify-content-end">
          <div className="d-flex align-items-end">
            <i className={'fa fa-shopping-cart cartWidget' }  ></i>
            <b><p className="numberCart">{totalQuantity}</p></b>
          
          </div>
        </div>
      </div>
   
  );
};
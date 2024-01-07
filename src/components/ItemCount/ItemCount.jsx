import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";

//Componente que nos muestra la cantidad de items a cargar en el carrito. Tambien se verifica que no se seleccione un stock 0

export const ItemCount = ({ stock, id, name, price, initial = 1 }) => {
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count === 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La cantidad no puede ser cero.",
      });
      return;
    }
    setCount(count - 1);
  };

  const handleAddItem = () => {
    if (count === 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La cantidad no puede ser cero.",
      });
    } else {
      addItem({ id, name, price }, count);
    }
  };

  return (
    <div className="">
      <p>Cantidad de horas</p>
      <button className="btn btn-info mx-2 border-black" onClick={decrement}>
        -
      </button>
      <strong>{count}</strong>
      <button className="btn btn-info mx-2 border-black" onClick={increment}>
        +
      </button>

      <div className="col-12">
        <button
          className="btn btn-outline-primary mt-2 col-4 "
          onClick={handleAddItem}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

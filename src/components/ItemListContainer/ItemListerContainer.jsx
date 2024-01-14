import { Products } from "../Products/Products";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";

//Mostramos los items por categoría. En caso en que no se encuentre la categoría muestra todos los items

export const ItemListContainer = () => {
  const { category } = useParams();

  return (
    <>
      <Products cat={category} />
    </>
  );
};

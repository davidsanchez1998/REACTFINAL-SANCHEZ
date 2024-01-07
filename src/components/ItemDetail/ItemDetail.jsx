import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
//desectructuramos el item para mostrar la información en una card, agregamos al componente ItemCount para cargar la cantidad
export const ItemDetail = ({ id, name, price, category, description, stock }) => {
  const onAdd = (items) => {
    alert(`Se agregaron ${items} al carrito`);
  };

  return (
    <div className="border col-12">
      <div className="card ">
        <Link to={"/"}>
          <div className="d-flex">
            <button className="fa fa-home p-2 btn btn-dark ms-auto"></button>
          </div>
        </Link>
        <div className="card-body col-12 ">
          <h5 className="card-title">{name}</h5>
          <p className="card-text col-12"> {description} </p>
          <p>Precio: {price} </p>
          <ItemCount
            stock={stock}
            id={id}
            name={name}
            price={price}
            onAdd={onAdd}
          />
        </div>
      </div>
    </div>
  );
};
import { Link } from "react-router-dom";

//Muesta el item de manera reducida, junto a su descripción
export const Item = ({ id, name, image, description }) => {
  return (
    <div className="border m-1 col-5">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>

          <img src={image} alt="Imagen" />
          <p className="card-text"> {description} </p>
          <Link to={`/item/${id}`}>
            <button className="btn btn-info">Detalles</button>
          </Link>
          <Link to={"/"}>
            <button className="fa fa-home mx-2 p-2 btn btn-dark"></button>
          </Link>
        </div>
      </div>
    </div>
  );
};
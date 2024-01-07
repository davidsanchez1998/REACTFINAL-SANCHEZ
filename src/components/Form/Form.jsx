import { useContext, useState } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
//Componente que nos permite cargar los datos del cliente, a traves de un formulario,  y verificar la consistencia del email

export const Form = () => {
  const { addOrderDB } = useContext(FirebaseContext);
  const { cartItems, totalCartItems } = useContext(CartContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    if (email === confirmEmail) {
      addOrderDB(cartItems, { name, surname, phone, email }, totalCartItems);

      setName("");
      setSurname("");
      setPhone("");
      setEmail("");
      setConfirmEmail("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Los emails no coinciden. Por favor, verifica tus datos.",
        timer: 3000,
      });
    }
  };

  return (
    <form className="w-50 mx-auto mt-4" onSubmit={handleForm}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="surname" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Teléfono
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmEmail" className="form-label">
          Confirmar Email
        </label>
        <input
          type="email"
          className="form-control"
          id="confirmEmail"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Comprar
      </button>
    </form>
  );
};
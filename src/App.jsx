import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Cart,
  ItemDetailContainer,
  ItemListContainer,
  NavBar, Contact
} from "./components";
import { CartContextProvider } from "./context/CartContext";
import { FirebaseContextProvider } from "./context/FirebaseContext";
function App() {
  return (
    <>
      <FirebaseContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            
            
          </BrowserRouter>
        </CartContextProvider>
      </FirebaseContextProvider>
    </>
  );
}

export default App;


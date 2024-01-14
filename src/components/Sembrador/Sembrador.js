import { addDoc, collection } from "firebase/firestore";
import {db}from "../../Config/firebaseConfig"

const products = [
    { id: "1", name: "Purple Haze", price: 1500, category: "flores", description: " 5g de flores tipo Purple Haze", stock: 3 },
  { id: "2", name: "Gorilla Glue", price: 850, category: "flores", description: "5g de flores tipo Gorilla Glue", stock: 2 },
  { id: "3", name: "Aceite CBD 10%", price: 1200, category: "aceites", description: "Aceite de CBD al 10%", stock: 1 },
  { id: "4", name: "Aceite CBD 20%", price: 1400, category: "aceites", description: "Aceite de CBD al 20%", stock: 4 },
  { id: "5", name: "Aceite CBD 30%", price: 980, category: "aceites", description: "Aceite de CBD al 30%", stock: 2 },
  { id: "6", name: "Raw Single Wide Classic", price: 1700, category: "papeles y filtros", description: "Papel clasico 70mm", stock: 1 },
  { id: "7", name: "Raw Black King Size Slim", price: 870, category: "papeles y filtros", description: "Papel negro 70mm", stock:3 },
  { id: "8", name: "Raw Classic Tips", price: 1400, category: "papeles y filtros", description: "Librillo clasico de filtros Raw", stock: 3 },
  { id: "9", name: "Bandeja Rick & morty", price: 1150, category: "otros", description: "Bandeja metalica con diseño de Rick & Morty", stock: 2 },
  { id: "10", name: "Grinder Pokeball", price: 600, category: "otros", description: "Picador plastico con diseño de pokebola", stock: 6 },

];

export const sembrador=()=>{
    products.forEach((products)=>
    {
        addDocs(collection(db,"products"),products)
    
    })
}    

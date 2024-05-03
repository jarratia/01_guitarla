import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./data/db";

function App() {
  //State
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  //Función
  function addToCart(item) {
    //Verificar si la guitarra existe en el arreglo, si existe modificamos solo la cantidad
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExists >= 0) {
      //cuando ya existe en el carrito
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;

      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  return (
    <>
      <Header cart={cart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

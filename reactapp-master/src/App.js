import './App.css';
import { useState } from "react";
import NavBar from "./NavBar";
import Cars from "./Cars";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartNum, setCartNum] = useState(0);

  const refreshCart = () => {
    const newCars = cars.filter((car) => car.amount > 0);
    setCartProducts(newCars);
  };

  const updateCart = (car) => {
    setCartProducts([...cartProducts, car]);
  };



  const addToCart = (id) => {
    cars.map((car) => {
      if (car.id === id) {
        car.amount++;
        const a = cartNum + 1;
        setCartNum(a);
        if (car.amount === 1) {
          updateCart(car);
        } else {
          refreshCart();
        }

        console.log("car id=", car.id, "amount=", car.amount);
      }
    });
  };

  const remFromCart = (id) => {
    cars.map((car) => {
      if (car.id === id) {
        
        if (car.amount > 0) {
          const a = cartNum - 1;car.amount--;
          setCartNum(a);
          refreshCart();
          console.log("car id=", car.id, "amount=", car.amount);
        } else {
          alert("Amount of this car is already 0.");
        }
      }
    });
  };
  const [cars, setCars] =useState( [
    {
      id: 1,
      title: "Porche Cayenne",
      image: "https://www.topgear.com/sites/default/files/cars-car/image/2019/06/pcgb18_0338_fine.jpg",
      description:
        "The Cayenne and Cayenne Coupé: both boast a striking appearance and impressive performance, with up to five seats. Whether you prefer embarking upon your next adventure in the Cayenne",
      amount: 0,
    },
    {
      id: 2,
      title: "Porsche Panamera",
      image:"https://vrelegume.rs/wp-content/uploads/2020/08/2-24.jpg",
      description:
        "The Porsche Panamera is a mid/full-sized luxury car (E-segment/F-segment in Europe) manufactured by the German automobile manufacturer Porsche.",
      amount: 0,
    },
    {
      id: 3,
      title: "Porsche Macan",
      image:"https://autorepublika.com/wp-content/uploads/2021/09/porsche-macan.jpg",
      description:
        "The Porsche Macan (Type 95B) is a high-performance five-door luxury crossover SUV produced by the German car manufacturer Porsche from 2014.",
      amount: 0,
    },
  ]);
  


  return (
    <BrowserRouter>
      <NavBar cartNum={cartNum} />
      <Routes>
        <Route
          path="/"
          element={
            <Cars
              cars={cars}
              onAdd={addToCart}
              onRemove={remFromCart}
            />
          }
        />
        <Route
        path="/cart"
        element={<Cart cartProducts={cartProducts} />}
      />
      </Routes>
    </BrowserRouter>
  );

}

export default App;

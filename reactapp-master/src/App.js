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
      title: "Porche Macan",
      image: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjIu5PqI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMDNjhQ5OC9gfN3dKymI4r3IfaFnqU3fk8LBC7wUhatmwZFHvf",
      description:
        "In the new Macan GTS, the love of adrenaline is ignited by a 2.9-litre twin-turbo V6 engine producing 280kW (380PS).The new engine generation captivates with the power and sound typical of a sports car",
      amount: 0,
    },
    {
      id: 2,
      title: "Citroen C3",
      image:"https://www.citroen.rs/wp-content/uploads/2016/06/1400x800_C31.jpg",
      description:
        "The attitude and appearance of the new Citroën C3 emphasize dynamism and give extra power to this vehicle. Its robust forms are highlighted through new graphic elements and are inspired by the style of SUVs.",
      amount: 0,
    },
    {
      id: 3,
      title: "Range Rover Sport",
      image:"https://media.ed.edmunds-media.com/land-rover/range-rover-sport/2020/oem/2020_land-rover_range-rover-sport_4dr-suv_p400-hst_fq_oem_1_1280x855.jpg",
      description:
        "With sportier design cues and a powerful, muscular stance, Range Rover Sport is designed for impact. Cleaner, more dynamic, there’s a contemporary feel everywhere you look—from the Range Rover Sport grille, redesigned bonnet vents to the refined, yet sporty wheel options.",
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

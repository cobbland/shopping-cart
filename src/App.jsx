import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";

export default function App() {
  const [cart, setCart] = useState([])

  let number = cart.length;

  function handleAddItem(name, cost, id, amount = 1) {
    let newCart = [...cart];
    let found = newCart.find(obj => obj.key === id);
    if (found) {
      found.count += amount;
    } else {
      newCart = [...cart, {title: name, price: cost, key: id, count: amount}];
    }
    number = newCart.length; //Make this so it adds all counts together
    setCart(newCart);
  }

  const sharedData = {
    onAddItem: handleAddItem,
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <Nav number={number} />
      <Outlet context={sharedData} />
    </>
  )
}
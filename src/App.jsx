import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";

export default function App() {
  const [cart, setCart] = useState([])
  const [number, setNumber] = useState(0);
  const [total, setTotal] = useState(0);

  function handleAddItem(name, cost, id, amount = 1) {
    let newCart = [...cart];
    let found = newCart.find(obj => obj.key === id);
    let newNum = 0;
    let newTotal = 0;
    if (found) {
      found.count += amount;
    } else {
      newCart = [...cart, {title: name, price: cost, key: id, count: amount}];
    }
    for (const obj of newCart) {
      newNum += obj.count;
      newTotal += obj.price * obj.count;
    }
    setNumber(newNum);
    setTotal(newTotal.toFixed(2));
    newCart = newCart.filter((obj) => obj.count > 0);
    setCart(newCart);
  }

  function handleIncrementCount(num, id) {
    let newCart = [...cart];
    const item = newCart.find(obj => obj.key === id);
    let newNum = 0;
    let newTotal = 0;
    if (item.count + num < 0) {
      item.count = 0;
    } else if (item.count + num > 99) {
      item.count = 99;
    } else {
      item.count = item.count + num;
    }
    for (const obj of newCart) {
      newNum += obj.count;
      newTotal += obj.price * obj.count;
    }
    setNumber(newNum);
    setTotal(newTotal.toFixed(2));
    newCart = newCart.filter((obj) => obj.count > 0);
    setCart(newCart);
  }

  const sharedData = {
    onAddItem: handleAddItem,
    incrementCount: handleIncrementCount,
    cartContents: cart,
    cartTotal: total,
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <Nav number={number} />
      <Outlet context={sharedData} />
    </>
  )
}
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";

export default function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [number, setNumber] = useState(() => {
    const saved = localStorage.getItem("number");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });
  const [total, setTotal] = useState(() => {
    const saved = localStorage.getItem("total");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("number", JSON.stringify(number));
    localStorage.setItem("total", JSON.stringify(total));
  }, [cart, number, total])

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
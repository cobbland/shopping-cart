import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <Nav />
      <Outlet />
    </>
  )
}
import { useOutletContext } from "react-router-dom";

export default function Cart() {
    const { incrementCount, cartContents, cartTotal } = useOutletContext();

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartContents.length > 0 ? cartContents.map((item) => (
                    <li key={item.key}>{item.title} | ${item.price} | <button onClick={() => incrementCount(-1, item.key)}>-</button>{item.count}<button onClick={() => incrementCount(1, item.key)}>+</button><button onClick={() => incrementCount(-item.count, item.key)}>Remove</button></li>
                )) : <p>Empty!</p>}
            </ul>
            <p>Subtotal: ${cartTotal}</p>
            <button>Checkout</button>
        </div>
    )
}
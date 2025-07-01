import { useOutletContext } from "react-router-dom";

export default function Cart() {
    const { cartContents, cartTotal } = useOutletContext();

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartContents.length > 0 ? cartContents.map((item) => (
                    <li key={item.key}>{item.title} | {item.count} | ${(item.price * item.count).toFixed(2)}</li>
                )) : <p>Empty!</p>}
            </ul>
            <p>Total: ${cartTotal}</p>
            <button>Checkouts</button>
        </div>
    )
}
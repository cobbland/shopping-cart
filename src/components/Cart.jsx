import { useOutletContext } from "react-router-dom";

export default function Cart() {
    const { cartContents, cartTotal } = useOutletContext();

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartContents.length > 0 ? cartContents.map((item) => (
                    <li key={item.key}>{item.title} | ${item.price} | <button>-</button>{item.count}<button>+</button></li>
                )) : <p>Empty!</p>}
            </ul>
            <p>Subtotal: ${cartTotal}</p>
            <button>Checkouts</button>
        </div>
    )
}
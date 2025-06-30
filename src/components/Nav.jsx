import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="home">Home</Link>
                </li>
                <li>
                    <Link to="shop">Shop</Link>
                </li>
            </ul>
            <div>
                <img src="/src/assets/cart.png" alt="A shopping cart." title="Cart" />
            </div>
        </div>
    )
}
import { Link } from "react-router-dom";
import SmallCart from "./SmallCart";

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
            <SmallCart />
        </div>
    )
}
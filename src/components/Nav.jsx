import { Link } from "react-router-dom";
import SmallCart from "./SmallCart";

export default function Nav(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="home">Home</Link>
                </li>
                <li>
                    <Link to="shop">Shop</Link>
                </li>
                <li>
                    <Link to="cart">
                        <SmallCart number={props.number} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}
import { useOutletContext } from "react-router-dom"

export default function Card(props) {

    const { onAddItem } = useOutletContext();

    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt="" />
            <p>{props.description}</p>
            <p>${props.price}</p>
            <button onClick={() => onAddItem(props.title, props.price, props.propKey)} >Add to cart</button>
        </div>
    )
}
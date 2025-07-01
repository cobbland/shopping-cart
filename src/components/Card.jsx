import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Card(props) {
    const [count, setCount] = useState(1);
    const { onAddItem } = useOutletContext();

    function handleIncrementCount(num) {
        const newCount = count + num;
        if (newCount < 0) {
            setCount(0);
        } else {
            setCount(newCount);
        }
    }

    function handleSetCount(value) {
        if (value === "") {
            setCount(0);
            return;
        } else if (value === "0") {
            setCount(0);
            return;
        }

        const cleanedValue = value.replace(/^0+/, '');
        if (cleanedValue === "") {
            setCount(0);
            return;
        }

        const num = parseInt(cleanedValue, 10);
        if (!num) {
            setCount(0)
        } else if (num > 99) {
            setCount(99);
        } else {
            setCount(num);
        }
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt="" />
            <p>{props.description}</p>
            <p>${props.price}</p>
            <input type="number" value={count} min="0" onChange={(e) => handleSetCount(e.target.value)} />
            <button onClick={() => handleIncrementCount(1)}>+</button>
            <button onClick={() => handleIncrementCount(-1)}>-</button>
            <button onClick={() => onAddItem(props.title, props.price, props.propKey, count)} >Add to cart</button>
        </div>
    )
}
export default function Card(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt="" />
            <p>{props.description}</p>
            <p>${props.price}</p>
            <button>Add to cart</button>
        </div>
    )
}
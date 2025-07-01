export default function SmallCart(props) {
    return (
        <div>
            <p>{props.number}</p>
            <img src="/src/assets/cart.png" alt="A shopping cart." title="Cart" />
        </div>
    )
}
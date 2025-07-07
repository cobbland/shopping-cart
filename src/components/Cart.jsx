import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const FlexDiv = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
`;

const CartItems = styled.div`
    display: flex;
    list-style: none;
    flex-direction: column;
    border: solid 2px #00000011;
    padding: 0 2rem;
    border-radius: 1rem;
    box-shadow: 2px 2px 2px #00000022;
    width: min(700px, 95%);
`;

const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1fr 3fr;
    border-bottom: 2px solid #00000011;
    padding: 1rem 0;
    align-items: center;
    gap: 1rem;

    &:nth-last-of-type(1) {
        border-bottom: none;
    }

    @media (width < 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 0.5rem;
    }
`;

const Image = styled.img`
    height: 70px;
    width: 100%;
    object-fit: contain;
`;

const Title = styled.div`
    font-weight: bold;
`;

const Buttons = styled.div`
    padding: 0.2rem;
    justify-self: end;

    @media (width < 700px) {
        justify-self: center;
    }
`;

const Button = styled.button`
    border: none;
    background-color: white;
    padding: 0.3rem 0.5rem;
    transition: background-color 0.2s;
    font-weight: bold;

    &:hover {
        background-color: #00000011;
    }
    
    &:nth-of-type(1) {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    &:nth-of-type(2) {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    
    &:nth-of-type(3) {
        margin-left: 0.7rem;
        padding: 0.5rem 0.7rem;
        border-radius: 10px;
        background-color: #00000011;
    }

    &:nth-of-type(3):hover {
        background-color: #00000022;
    }
`;

const Checkout = styled.button`
    border: none;
    padding: 0.7rem 1rem;
    transition: background-color 0.2s;
    font-weight: bold;
    border-radius: 10px;
    background-color: #84B0C1;
    color: white;

    &:hover {
        background-color:rgb(111, 150, 165);
    }
`;

export default function Cart() {
    const { incrementCount, cartContents, cartTotal } = useOutletContext();

    return (
        <div>
            <h2>Cart</h2>
            <p>This is the cart.</p>
            <FlexDiv>
                <CartItems>
                    {cartContents.length > 0 ? cartContents.map((item) => (
                        <Item key={item.key}>
                            <Image src={item.image} alt="" />
                            <Title>{item.title}</Title> ${item.price}
                            <Buttons>
                                <Button onClick={() => incrementCount(-1, item.key)}>-</Button>
                                {item.count}
                                <Button onClick={() => incrementCount(1, item.key)}>+</Button>
                                <Button onClick={() => incrementCount(-item.count, item.key)}>Remove</Button>
                            </Buttons>
                        </Item>
                    )) : <p>Empty!</p>}
                </CartItems>
                <div>
                    <p>Subtotal: ${cartTotal}</p>
                    <Checkout>Checkout</Checkout>
                </div>
            </FlexDiv>
        </div>
    )
}
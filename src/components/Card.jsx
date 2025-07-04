import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
    width: 320px;
    border: solid 2px #00000011;
    padding: 1rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: 2px 2px 2px #00000022;
    cursor: pointer;
    transition: box-shadow 0.2s;

    &:hover,
    &:active,
    &:focus {
        box-shadow: 5px 5px 5px #00000011;
    }
`;

const StyledImage = styled.img`
    height: 200px;
    width: 100%;
    object-fit: contain;
`;

const ImageContainer = styled.div`
    padding: 0.6rem;
`;

const StyledTitle = styled.h3`
    margin-bottom: auto;
    padding-bottom: 1rem;
    font-size: 1.2rem;
    height: 2rem;
    overflow: hidden;
    white-space: preserve nowrap;
    text-overflow: ellipsis;
`;

const Price = styled.p`
    margin-top: auto;
`;

const Buttons = styled.div`
    align-self: center;
`;

const StyledButton = styled.button`
    border: none;
    background-color: #00000022;
    padding: 0.7rem 1rem;
    transition: background-color 0.2s;
    cursor: pointer;
    font-weight: bold;

    &:hover,
    &:active,
    &:focus {
        background-color: #00000033;
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
        border-radius: 10px;
        background-color: #84B0C1;
        color: white;
    }

    &:nth-of-type(3):hover {
        background-color:rgb(111, 150, 165);
    }
    
`;

const Input = styled.input`
    width: 3rem;
    padding: 0.7rem 1rem;
    border-radius: 0;
    border: none;
    background-color: #00000011;
`;

export default function Card(props) {
    const [count, setCount] = useState(1);
    const { onAddItem } = useOutletContext();

    function handleIncrementCount(num) {
        const newCount = count + num;
        if (newCount < 0) {
            setCount(0);
        } else if (newCount > 99) {
            setCount(99);
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
        <StyledCard>
            <ImageContainer>
                <StyledImage src={props.image} alt="" />
            </ImageContainer>
            <StyledTitle>{props.title}</StyledTitle>
            {/* <p>{props.description}</p> */}
            <Price>${props.price}</Price>
            <Buttons>
                <StyledButton onClick={() => handleIncrementCount(-1)}>-</StyledButton>
                <Input type="text" value={count} min="0" onChange={(e) => handleSetCount(e.target.value)} />
                <StyledButton onClick={() => handleIncrementCount(1)}>+</StyledButton>
                <StyledButton onClick={() => onAddItem(props.title, props.price, props.propKey, count)} >Add to cart</StyledButton>
            </Buttons>
        </StyledCard>
    )
}
import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import Loading from "./Loading.jsx";
import styled from "styled-components";

const AllCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`;

export default function Shop() {
    const [shopItems, setShopItems] = useState(() => {
        const saved = sessionStorage.getItem("items");
        const initialValue = JSON.parse(saved);
        return initialValue || null;
    });

    useEffect(() => {
        async function dataFetch() {
            const data = await (await fetch('https://fakestoreapi.com/products')).json();
            setShopItems(data);
            sessionStorage.setItem("items", JSON.stringify(data))
        };
        dataFetch();
    }, []);

    return (
        <div>
            <h2>Shop</h2>
            <p>This is the shop.</p>
            <AllCards>
                {!shopItems ? <Loading /> : shopItems.map((item) => (
                    <Card
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        key={item.id}
                        propKey={item.id}
                        image={item.image}
                    />
                ))}
            </AllCards>
        </div>
    )
}
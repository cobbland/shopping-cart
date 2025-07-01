import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import Loading from "./Loading.jsx";

export default function Shop() {
    const [shopItems, setShopItems] = useState(null);

    useEffect(() => {
        async function dataFetch() {
            const data = await (await fetch('https://fakestoreapi.com/products')).json();
            setShopItems(data);
        };
        dataFetch();
    }, []);

    return (
        <div>
            <h2>Shop</h2>
            <p>This is the shop.</p>
            {!shopItems ? <Loading /> : shopItems.map((item) => (
                <Card 
                    title={item.title} 
                    price={item.price} 
                    description={item.description} 
                    key={item.id} 
                    image={item.image}
                />
            ))}
        </div>
    )
}
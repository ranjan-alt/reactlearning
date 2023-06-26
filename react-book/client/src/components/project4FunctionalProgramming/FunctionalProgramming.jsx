import { useState } from "react";

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
];

const FunctionalProgramming = () => {

    const [items, setItems] = useState(products)

    const updateProducts = (productId, newPrice) => {
        return products.map((product) => {
            if (product.id === productId) {
                return { ...product, price: newPrice }
            }
        })
    }
    return (
        <>
            <h1>Functional Programming</h1>
            {items}
            <button onClick={updateProducts()}>Update Product</button>
        </>
    )
}


export default FunctionalProgramming
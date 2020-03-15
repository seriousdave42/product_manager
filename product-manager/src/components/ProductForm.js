import React, { useState } from 'react';

const ProductForm = (props) => {

    const { initialProduct, productHandler } = props;
    const [prodName, setProdName] = useState(initialProduct.prodName);
    const [prodPrice, setProdPrice] = useState(initialProduct.prodPrice);
    const [prodDesc, setProdDesc] = useState(initialProduct.prodDesc);

    const onSubmitHandler = e => {
        e.preventDefault();
        productHandler({
            prodName: prodName,
            prodPrice: prodPrice,
            prodDesc: prodDesc
        });
    };

    return (
        <div>
            <form onSubmit = {onSubmitHandler}>
                <p>
                    <label>Title </label>
                    <input type="text" value={prodName} onChange={e=>setProdName(e.target.value)}></input>
                </p>
                <p>
                    <label>Price $ </label>
                    <input type="number" value={prodPrice} step=".01" onChange={e=>setProdPrice(e.target.value)}></input>
                </p>
                <p>
                    <label>Description </label>
                    <input type="text" value={prodDesc} onChange={e=>setProdDesc(e.target.value)}></input>
                </p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ProductForm;
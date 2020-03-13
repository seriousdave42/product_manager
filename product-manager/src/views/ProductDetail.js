import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetail = props => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct({
                ...res.data.product
            }))
            .catch(err => console.log(err));
    }, [props.id])

    return (     
        <div>
            <h2>{product.prodName}</h2>
            <p>Price: ${product.prodPrice}</p>
            <p>Description: {product.prodDesc}</p>
        </div>
    )
}

export default ProductDetail;
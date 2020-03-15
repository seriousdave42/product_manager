import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

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
            <Link to={"/product/"+product._id+"/update"}>Update</Link>
            <br />
            <br />
            <DeleteButton productID={product._id} successCallback={() => navigate("/")}/>
        </div>
    )
}

export default ProductDetail;
import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const ProductList = props => {

    const { removeFromDOM } = props;

    const deleteHandler = (productID) => {
        axios.delete("http://localhost:8000/api/product/"+productID+"/destroy")
            .then(res => removeFromDOM(productID))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Product List</h2>
            <ul style={{width: "200px", margin: "auto"}}>
                {props.products.map((product, i) => 
                    <li key={i}>
                        <Link to = {`/product/${product._id}`}>{product.prodName}</Link>
                        <button onClick={e=>deleteHandler(product._id)}>Delete</button>    
                    </li>)}
            </ul>
        </div>
    )

}

export default ProductList;

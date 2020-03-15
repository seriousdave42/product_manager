import React from 'react';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const ProductList = props => {

    return (
        <div>
            <h2>Product List</h2>
            <ul style={{width: "200px", margin: "auto"}}>
                {props.products.map((product, i) => 
                    <li key={i}>
                        <Link to = {`/product/${product._id}`}>{product.prodName}</Link>
                        <DeleteButton productID={product._id} successCallback={() => props.removeFromDOM(product._id)} />    
                    </li>)}
            </ul>
        </div>
    )

}

export default ProductList;

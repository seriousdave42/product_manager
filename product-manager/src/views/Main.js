import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProdForm from '../components/ProdForm';
import ProductList from '../components/ProductList';

const Main = () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    const removeFromDOM = productID => {
        setProducts(products.filter(product => product._id !== productID));
    }

    return(
        <div>
            <h1>Product Manager</h1>
            <ProdForm />
            <hr />
            {loaded && <ProductList products={products} removeFromDOM={removeFromDOM}/>}
        </div>
    )
}

export default Main;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
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

    const newProduct = product => {
        axios.post("http://localhost:8000/api/product/create", product)
            .then(res => setProducts([...products, res.data.product]))
            .catch(err => console.log(err));
    }

    const removeFromDOM = productID => {
        setProducts(products.filter(product => product._id !== productID));
    }

    return(
        <div>
            <h1>Product Manager</h1>
            <ProductForm initialProduct={{
                prodName: "",
                prodPrice: 0,
                prodDesc: ""
            }} productHandler={newProduct} />
            <hr />
            {loaded && <ProductList products={products} removeFromDOM={removeFromDOM}/>}
        </div>
    )
}

export default Main;
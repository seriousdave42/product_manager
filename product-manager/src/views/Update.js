import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import ProductForm from '../components/ProductForm';

const Update = (props) => {
    const { id } = props;
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                setProduct({...res.data.product});
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [id])

    const updateProduct = product => {
        axios.put("http://localhost:8000/api/product/"+id+"/update", product)
            .then(res=> {
                console.log("Response: ", res);
                navigate("/product/"+id);
            })
            .catch(err=>console.log("Error: ", err));
    }

    return (
        <div>
            {loaded && 
                <ProductForm initialProduct={product} productHandler={updateProduct} />
            }
        </div>
    )
}

export default Update;

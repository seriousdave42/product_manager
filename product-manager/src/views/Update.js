import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Update = (props) => {
    const { id } = props;
    const [prodName, setProdName] = useState("");
    const [prodPrice, setProdPrice] = useState(0);
    const [prodDesc, setProdDesc] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                setProdName(res.data.product.prodName);
                setProdPrice(res.data.product.prodPrice);
                setProdDesc(res.data.product.prodDesc);
            })
            .catch(err => console.log(err));
    }, [id])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/product/"+id+"/update", {
            prodName,
            prodPrice,
            prodDesc
        })
            .then(res=> {
                console.log("Response: ", res);
                navigate("/product/"+id);
            })
            .catch(err=>console.log("Error: ", err));
    }

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
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default Update;

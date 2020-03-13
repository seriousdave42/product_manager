import React, { useState } from 'react';
import axios from 'axios';

const ProdForm = (props) => {
    const [prodName, setProdName] = useState("");
    const [prodPrice, setProdPrice] = useState(0);
    const [prodDesc, setProdDesc] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/create', {
            prodName,
            prodPrice,
            prodDesc
        })
            .then(res=>console.log("Response: ", res))
            .catch(err=>console.log("Error: ", err));
    }

    return (
        <div>
            <form onSubmit = {onSubmitHandler}>
                <p>
                    <label>Title </label>
                    <input type="text" onChange={e=>setProdName(e.target.value)}></input>
                </p>
                <p>
                    <label>Price $ </label>
                    <input type="number" step=".01" onChange={e=>setProdPrice(e.target.value)}></input>
                </p>
                <p>
                    <label>Description </label>
                    <input type="text" onChange={e=>setProdDesc(e.target.value)}></input>
                </p>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default ProdForm;
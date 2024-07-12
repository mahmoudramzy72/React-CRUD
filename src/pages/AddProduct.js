import { useNavigate } from 'react-router-dom';
import Products from './Products';
import { useEffect, useState } from "react";
function AddProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);

    let navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                price
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            navigate('/products')
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    return (
        <>
            <h1>AddProduct Page</h1>
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="productTitle" className="form-label">
                        Title
                    </label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="productTitle"
                        aria-describedby="Product Title" 
                        placeholder='Add The Product Title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="productPrice" 
                        aria-describedby="Product Price"
                        placeholder='Add The Product Price' 
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>
    );
}

export default AddProduct;

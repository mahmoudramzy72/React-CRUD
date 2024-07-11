import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = () => {
        fetch('http://localhost:3000/products')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data)
            });
    }
    const deleteProduct = (productId) => {
        fetch(`http://localhost:3000/products/${productId}`, {
            method: "delete"
        })
        .then ((res) => res.json())
        .then ((data) => {
            getAllProducts();
        })   
    }

    return (
        <>
            <h1>Products Page</h1>
            <Link to={"/products/add"} className="btn btn-success">Add New Product</Link>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Opertaions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm m-1" onClick={() => deleteProduct(product.id)}>Delete</button>
                                    <Link to={`/products/${product.id}`} className="btn btn-info btn-sm m-1">View</Link>
                                    <button className="btn btn-primary btn-sm m-1">Edit</button>
                                </td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </>
    )
}

export default Products;
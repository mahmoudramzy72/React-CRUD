import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
    const [product, setProduct] = useState([]);
    let { productId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:3000/products/${productId}`)
            .then((res) => res.json())
            .then((product) => {
                console.log(product);
                setProduct(product)
            });


    }, [])
    return (
        <>
                  <h1>{product.title}</h1> 
                  <img src={product.image}></img> 
                  <p>{product.description}</p>  
                  <h3>Price : {product.price} $</h3>
        </>
    )
}

export default ProductDetails;
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios"
import { useEffect } from "react";
import { setProducts } from "../Redux/Actions/ProductActions"

export default function ProductsList() {
    const products = useSelector(state => state.allProducts.porducts[0]);
    const dispatch = useDispatch()

    try {

        useEffect(() => {
            const fetchProducts = async () => {
                const response = await axios.get("https://fakestoreapi.com/products").catch(err => {
                    console.log(err, "error =-->>>> ")
                })
                console.log(response)
                dispatch(setProducts(response?.data))
            }
            fetchProducts()
        }, [])
    } catch (error) {
        console.log("catch error :", error)
    }

    console.log(products);
    return (
        <>
            <h1>Product list</h1>
            <div className="ui grid container">
                <ProductComponent />
            </div>
        </>
    );
}

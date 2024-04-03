import { useParams } from "react-router-dom"
// import axios from "axios"
import { removeSelectProducts, fetchProduct } from "../Redux/Actions/ProductActions";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
export default function ProductDetails() {
    const product = useSelector(state => state.product);
    const { image, title, description, price, category } = product
    const dispatch = useDispatch()
    const { productId } = useParams();

    try {

        // const fetchProductDetails = async () => {
        //     const response = await axios(`https://fakestoreapi.com/products/${productId}`)
        //     // console.log(response?.data, "product ===>>>>>")
        //     dispatch(selectProducts(response?.data));

        // }
        useEffect(() => {
            if (productId && productId !== "") dispatch(fetchProduct(productId))
            return () => {
                dispatch(removeSelectProducts())
            }
        }, [productId , dispatch])
    } catch (error) {
        console.log("error catch ", error)
    }
    console.log(product, "====>>>> products")
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle align row">
                            <div className="column lp">
                                <img src={image} alt="" className="ui fluid image" />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label" >{price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex={0}>
                                    <div className="hidden content">
                                        <i className="shop icon">Shop</i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
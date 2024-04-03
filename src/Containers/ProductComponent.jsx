import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function ProductComponent() {
    const products = useSelector(state => state.allProducts.porducts);




    const renderList = products?.map(product => {
        const { id, title, image, price, category } = product
        return (
            <div className="four wide column" key={id}>
                <Link to={`product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <img style={{ width: "150px", height: "200px" }} src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header"> {title} </div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return <>{renderList}</>
}

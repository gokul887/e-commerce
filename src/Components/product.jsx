import { FavoriteBorderOutlined, SearchOutlined,ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from 'react-router-dom'

const Product = ({ item }) => {
    
    return (
        <div className="product-container">
            <div className="circle" />
            <img src={item.img} />
            <div className="info">
                <div className="icon">
                    <Link item={item} to={`/products/${item.id}`}><SearchOutlined /></Link>
                </div>
            </div>
        </div>
    );
}
export default Product;
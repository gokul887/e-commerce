import { popularProducts } from "../data/data";
import '../styles/products.css'
import Product from "./product";

const Products = () => {
    return (
        <div className="products-container">
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Products;
import Navbars from "../Components/navbars";
import Products from "../Components/products";
import Footer from "../Components/footer";
import React from 'react'

const productlist = () => {
    return (
        <div className="productlist-container">
            <Navbars />
            <Products />
            <Footer />
        </div>
    )
}

export default productlist

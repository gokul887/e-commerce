import React from 'react'
import Navbars from '../Components/navbars'
import { Add, Remove } from '@material-ui/icons'
import '../styles/cart.css'

const Cart = () => {
    return (
        <div className="cart-container">
            <Navbars />
            <div className="cart-wrapper">
                <h4>YOUR CART</h4>
                <div className="top">
                    <button className="top">CONTINUE SHOPPING</button>
                    <div className="top-text-container">
                        <div className="top-text">SHOPPING BAG(2)</div>
                    </div>
                    <button className="top">CHECKOUT NOW</button>
                </div>
                <div className="bottom">
                    <div className="item-info">
                        <div className="product">
                            <div className="product-info">
                                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                                <div className="details">
                                    <span className="product-name"><b>Product: </b>Shoe #2</span>
                                    <span className="product-id"><b>ID: </b>1</span>
                                </div>
                            </div>
                            <div className="product-price-container">
                                <div className="product-amount">
                                    <Add />
                                    <div className="amount-num">2</div>
                                    <Remove />
                                </div>
                                <div className="product-price">80 CAD</div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-info">
                                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                                <div className="details">
                                    <span className="product-name"><b>Product: </b>Shoe #3</span>
                                    <span className="product-id"><b>ID: </b>2</span>
                                </div>
                            </div>
                            <div className="product-price-container">
                                <div className="product-amount">
                                    <Add />
                                    <div className="amount-num">2</div>
                                    <Remove />
                                </div>
                                <div className="product-price">50 CAD</div>
                            </div>
                        </div>
                    </div>
                    <div className="summary">
                        <h1>ORDER SUMMARY</h1>
                        <div className="sum-item">
                            <div className="sum-text">Subtotal</div>
                            <div className="sum-price">260 CAD</div>
                        </div>
                        <div className="sum-item">
                            <div className="sum-text">Shipping</div>
                            <div className="sum-price">5 CAD</div>
                        </div>
                        <div className="sum-item sum-total">
                            <div className="sum-text">Total</div>
                            <div className="sum-price">265 CAD</div>
                        </div>
                        <button>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart

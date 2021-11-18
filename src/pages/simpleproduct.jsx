import React from 'react'
import { Add, Remove } from '@material-ui/icons'
import Navbars from '../Components/navbars'
import Footer from '../Components/footer'
import '../styles/simpleproduct.css'
import { useParams } from 'react-router-dom'
import { popularProducts } from "../data/data";
import { useState } from 'react'

const SimpleProduct = ( {item}) => {
    let {id} = useParams();
    const product = popularProducts.find(product => product.id === parseInt(id))
    const [count, setCount] = useState(0);
    function subtract (count, setCount){
        if (count > 0) {
            setCount(count-1)
        }
    }
    function add (count, setCount){
        setCount(count+1)
    }
    return (
        <div className="simpleproduct-container">
            <Navbars />
            <div className="simpleproduct-wrapper">
                <div className="img">
                    <img src={product.img} alt="" />
                </div>
                <div className="item-info">
                    <h4>{product.title}</h4>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nostrum facere quod saepe illo minima mollitia voluptas ab cupiditate recusandae vero eaque rerum, accusantium maiores atque sequi aperiam impedit soluta!</p>
                    <span className="price">{product.price} CAD</span>
                    <div className="add">
                        <div className="amount">
                            <button className="subtract" onClick={() => subtract(count,setCount)}>
                                <Remove />
                            </button>
                            <span className="amount-num">{count}</span>
                            <button className="add">
                                <Add onClick={() => add(count,setCount)}/>
                            </button>
                        </div>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SimpleProduct

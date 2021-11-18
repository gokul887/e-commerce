import React from 'react'

const Category = ({item}) => {
    return (
        <div className="category-container">
            <img src={item.img} alt="" />
            <div className="item-info">
                <h4>{item.categoriestitle}</h4>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}

export default Category

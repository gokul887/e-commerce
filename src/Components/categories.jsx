import React from 'react'
import { categories } from "../data/data";
import Category from "./category";
import '../styles/categories.css'

const Categories = () => {
    return (
        <div className="categories-container">
            {categories.map((item) => (
                <Category item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Categories

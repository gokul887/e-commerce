import React from 'react'
import Navbars from '../Components/navbars'
import Carousel from '../Components/carousel'
import Categories  from '../Components/categories'
import Footer from '../Components/footer'

const Home = () => {
    return (
        <div>
            <Navbars />
            <Carousel />
            <Categories />
            <Footer />
        </div>
    )
}

export default Home

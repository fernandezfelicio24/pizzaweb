import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
    return (
        <div className="home">
            <div className="headerContainer" style={{backgroundImage: `url(${BannerImage})`}}>
                <h1>Felicio's Pizzeria</h1>
                <p>PIZZA KONA IMI NIA GOSTU HOTU</p>

                <Link to="/menu">
                <button> ORDER NOW </button>
                </Link>
                
            </div>
        </div>
    )
}

export default Home

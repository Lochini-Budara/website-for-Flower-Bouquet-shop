import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import front4 from '../../assets/flower4.jpg'
import front5 from '../../assets/flower5.jpg'
import front6 from '../../assets/flower6.jpg'
import front7 from '../../assets/flower7.jpg'
import front8 from '../../assets/flower8.jpg'
import front9 from '../../assets/flower9.jpg'
import front11 from '../../assets/flower11.jpg'
import front12 from '../../assets/flower12.jpg'
import front14 from '../../assets/flower14.jpg'
import Upcoming from '../../Components/Upcoming/Upcoming';

function Home() {
   
    let categories = [
        {
            id:1,
            title:"Lavendra Floral Vase",
            image: front5,
            price: "RS. 4500/="
        },
        {
            id:2,
            title:"Perfect White Vase",
            image: front6,
            price: "RS. 4500/="  
        },
        {
            id:3,
            title:"Pink Perfection Vase",
            image: front7,
             price: "RS. 4500/="
        },
        {
            id:4,
            title:"Vibrant Vase",
            image:front8,
             price: "RS. 4500/="
        },
        {
            id:5,
            title:"Ariana Grand",
            image: front9,
             price: "RS. 4500/="
        },
        {
            id:3,
            title:"Violet Grand",
            image: front11,
             price: "RS. 4500/="
        },
        {
            id:4,
            title:"Bianca Grand",
            image: front12,
             price: "RS. 4500/="
        },
        {
            id:5,
            title:"Vibrant Grand",
            image:front14,
             price: "RS. 4500/="
        }
    ];
    
    return (
        <>
            <Header/>
            <br/>
            <div className="front">
                <img src={front4} className="frontimage" />

                <button className="customize_button">
                    customize your own bouqet
                </button>
            </div>

            <br /><br />

            <div className="main_container">
            <div className="slide_container">
            <Upcoming/>
           
            </div>

            <div className="card">
                <span className="singlecard">
                    {categories.map((category) => (
                        <div className="placard" key={category.id}>
                            <img src={category.image} className="cardimage" alt={category.title}/>
                            <br />
                            {category.title} <br />
                            {category.price} <br />
                            <button className="button">
                                view
                            </button>

                        </div>
                    ))}
                </span>
            </div>
            </div>

     

        </>
    );
}

export default Home;

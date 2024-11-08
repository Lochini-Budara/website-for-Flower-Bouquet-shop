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
import { HashLink } from 'react-router-hash-link';
import Swal from 'sweetalert2';



function Home() {
   
    let categories = [
        {
            id:1,
            title:"Lavendra Floral Vase",
            image: front5,
            price: "RS. 4500.00"
        },
        {
            id:2,
            title:"Perfect White Vase",
            image: front6,
            price: "RS. 4500.00"  
        },
        {
            id:3,
            title:"Pink Perfection Vase",
            image: front7,
             price: "RS. 4500.00"
        },
        {
            id:4,
            title:"Vibrant Vase",
            image:front8,
             price: "RS. 4500.00"
        },
        {
            id:5,
            title:"Ariana Grand",
            image: front9,
             price: "RS. 4500.00"
        },
        {
            id:3,
            title:"Violet Grand",
            image: front11,
             price: "RS. 4500.00"
        },
        {
            id:4,
            title:"Bianca Grand",
            image: front12,
             price: "RS. 4500.00"
        },
        {
            id:5,
            title:"Vibrant Grand",
            image:front14,
             price: "RS. 4500.00"
        }
    ];
    
    const handleClick = (category) => {
        Swal.fire({
            imageUrl: category.image,
            title: `${category.title} (${category.price})`,
            text: "Indulge in the exquisite beauty of our Pink Perfection flower arrangement, featuring the Gerbera Pink and the Candy Pink Rose. This stunning Hatbox combines the cheerful elegance of Gerbera daisies with the romantic charm of roses, creating a captivating display of pink hues.",
            imageWidth:300,
            imageHeight:300,
            showCancelButton: true,
            confirmButtonText: "Add to Cart",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Item added to cart", "", "success");
            }
        });
    };
    return (
        <>
            <Header/>
            <br/>
            <div className="front">
                <img src={front4} className="frontimage" />

                <button className="customize_button">
                <HashLink to="./Singleflower#customize " className="hash">customize your own bouqet</HashLink>  
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
                            
                            <button onClick={() => handleClick(category)} className="button">
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

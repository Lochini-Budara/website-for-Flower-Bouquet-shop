import React from 'react'
import './Singleflower.css'
import Upcoming from '../../Components/Upcoming/Upcoming'
import Header from '../../Components/Header/Header'
import birthday1 from '../../assets/flower2.jpg'

function Singleflower() {
    let categories=[
        {
          id:1,
          item:"FLORAL",
          image: birthday1,
          price: "3500/="
        },
        {
          id:2,
          item:"FLORAL",
          image: birthday1,
          price: "3500/="
        },
        {
          id:3,
          item:"FLORAL",
          image: birthday1,
          price: "3500/="
        },
        {
          id:4,
          item:"FLORAL",
          image: birthday1,
          price: "3500/="
        },
        {
          id:5,
          item:"FLORAL",
          image: birthday1,
          price: "3500/="
        },
        {
          id:6,
          item:"FLORAL",
          image: birthday1,
          price: "3500/="
        },
        {
          id:7,
          item:"FLORAL",
          image: birthday1,
          price: "3500/="
        },
        {
          id:8,
          item:"FLORAL",
          image: birthday1,
          price: "3500/="
        }
      ]
    
      return (
    
      <>
      <span id="customize">
      <Header/> <br />
        <div className="birthday_description">
          <div className="birthday_topic">
   CUSTOMIZE YOUR OWN FLOWER BOUQET
          </div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat fugiat voluptates ut unde voluptas possimus quam illum, commodi quod saepe, vitae quibusdam officiis architecto ducimus cum ad mollitia qui ea.
           </div> <br /><br />
    
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
                                {category.item} <br />
                                {category.price} <br />
                                <button className="button">
                                    view
                                </button>
    
                            </div>
                        ))}
                    </span>
                </div>
    
    </div>
    </span>
         </>
  )
}

export default Singleflower
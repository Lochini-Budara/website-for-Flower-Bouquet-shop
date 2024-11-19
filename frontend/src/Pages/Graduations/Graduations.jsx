import React from "react";
import "./Graduations.css";
import birthday1 from "../../assets/flower5.jpg";
import Header from "../../Components/Header/Header";
import Upcoming from "../../Components/Upcoming/Upcoming";
import Swal from "sweetalert2";



function Graduations() {
  let categories = [
    {
        id:1,
        title:"Lavendra Floral Vase",
        image: birthday1,
        price: "RS. 4500.00"
    },
    {
        id:2,
        title:"Perfect White Vase",
        image:birthday1,
        price: "RS. 4500.00"  
    },
    {
        id:3,
        title:"Pink Perfection Vase",
        image: birthday1,
         price: "RS. 4500.00"
    },
    {
        id:4,
        title:"Vibrant Vase",
        image:birthday1,
         price: "RS. 4500.00"
    },
    {
        id:5,
        title:"Ariana Grand",
        image:birthday1,
         price: "RS. 4500.00"
    },
    {
        id:3,
        title:"Violet Grand",
        image:birthday1,
         price: "RS. 4500.00"
    },
    {
        id:4,
        title:"Bianca Grand",
        image:birthday1,
         price: "RS. 4500.00"
    },
    {
        id:5,
        title:"Vibrant Grand",
        image:birthday1,
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
        <div className="birthday_description">
      <div className="birthday_topic">
 GRADUATION
      </div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat fugiat voluptates ut unde voluptas possimus quam illum, commodi quod saepe, vitae quibusdam officiis architecto ducimus cum ad mollitia qui ea.
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

export default Graduations;

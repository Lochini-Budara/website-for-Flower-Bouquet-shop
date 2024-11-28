import React, { useState } from "react";
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
      address: "",
      contactNumber: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = {};
  
      if (!formData.name.trim()) {
        validationErrors.name = "Name is required";
      }
  
      if (!formData.email.trim()) {
        validationErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        validationErrors.email = "Email is invalid";
      }
  
      if (!formData.address.trim()) {
        validationErrors.address = "Address is required";
      }
  
      if (!formData.contactNumber.trim()) {
        validationErrors.contactNumber = "Contact Number is required";
      }
  
      if (!formData.password.trim()) {
        validationErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        validationErrors.password = "Password should be at least 6 characters";
      }
  
      if (formData.confirmedPassword !== formData.password) {
        validationErrors.confirmedPassword = "Passwords do not match";
      }
  
      setErrors(validationErrors);
  
      if (Object.keys(validationErrors).length === 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Signed In Successfully!!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/Reservation#reservation");
        });
      }
    };
  
    return (
      <>
     

     
       <br />
        <br />
        <section id="signup">
          <div className="signup">
          
  
            <div className="signup_form">
              <form onSubmit={handleSubmit}>
                <div className="signup_name">Sign Up</div> <br />
                Name: <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="signup_input"
                  onChange={handleChange}
                  value={formData.name}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}{" "}
                <br />
                <br />
                Email: <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Example@gmail.com"
                  className="signup_input"
                  onChange={handleChange}
                  value={formData.email}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
                <br />
                <br />
                Address: <br />
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  className="signup_input"
                  onChange={handleChange}
                  value={formData.address}
                />
                {errors.address && (
                  <span className="error-message">{errors.address}</span>
                )}
                <br />
                <br />
                Contact Number: <br />
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Enter Contact Number"
                  className="signup_input"
                  onChange={handleChange}
                  value={formData.contactNumber}
                />
                {errors.contactNumber && (
                  <span className="error-message">{errors.contactNumber}</span>
                )}
                <br />
                <br />
                Password: <br />
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  className="signup_input"
                  onChange={handleChange}
                  value={formData.password}
                />
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
                <br />
                <br />
                Repeat Password: <br />
                <input
                  type="password"
                  name="confirmedPassword"
                  placeholder=" ********"
                  className="signup_input"
                  onChange={handleChange}
                  value={formData.confirmedPassword}
                />
                {errors.confirmedPassword && (
                  <span className="error-message">
                    {errors.confirmedPassword}
                  </span>
                )}
                <br />
                <br />
                <button type="submit" className="signup_button">
                  Sign Up
                </button>
                <center>You agree to our terms and policies.</center>
                <br />
                <br />
              </form>
            </div>
  
           
          </div>
        </section>
    
      </>
    );
  }
export default Signup
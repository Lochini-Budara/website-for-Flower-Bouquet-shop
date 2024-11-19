import React from 'react'
import './Login.css'
//import Swal from 'sweetalert2'
import axios from 'axios';



function Login() {
   const [msg,setMsg]=useState("")

   submit=async(e)=>{
    e.preventDefault()

    try {
       await axios.post("http://localhost:8000/",(
        msg 
       )) 
    }
     catch (e) {
        console.log(e);
    }
   }
  return (
   <>
   <div className="cont">
    <textarea name="text" cols="30" rows="10" onChange={(e)=> {setMsg(e.target.value)}} placeholder="enter the text"></textarea>
   <input type="submit" onClick={submit} value="submit" />
   
   </div>
   </>
  )
}

export default Login
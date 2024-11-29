import { useState } from "react";
import Signup from "./Signup/Signup";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";

import React from 'react'

function Router() {
  return (
   
<BrowserRouter>
<Routes>

    <Route path='/Signup' element={<Signup/>} ></Route>
    <Route path='/Login' element={<Login/>} ></Route>
</Routes>


</BrowserRouter>


  )
}

export default Router

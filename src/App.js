
import './App.css';
import Ninjas from './Ninjas.js'
import Addninja from './Addninja'

import React, { Component, useState } from "react";

const App = ()=> {
  const [ninjas,setNinjas] = useState([
    {Name:'Jerry', Age:'2', Belt:'Black',id:1},
    {Name:'Amne', Age:'15', Belt:'Blue', id:2},
    {Name:'Peterson', Age:'20', Belt:'Black',id:3},
    {Name:'Fayo', Age:'25', Belt:'Purple', id:4}
  ]);

 
  return (
    <div className='App'>
      <h1>My First App</h1>
      <p>Welcome Supermanic</p>
      <Ninjas ninjas ={ninjas} setNinjas={setNinjas}/>
      <Addninja ninjas={ninjas} setNinjas={setNinjas}/>
      
    </div>
  );
}

export default App;

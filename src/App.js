
import React, { useState } from "react";
import Todos from './Todos'
import Addform from './Addform'



const App = () => {

const[todos,setTodos]  = useState([
    {id:1, content:'Buy some milk'},
    {id:2, content:'play mario cart'}
  ])
  return (
    <div className="todo-app container">
    <h1 className="center blue-text">Todos</h1>
    <Todos todos={todos} setTodos={setTodos}/>
    <Addform todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

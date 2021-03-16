import React from 'react'

const Todo = ({todos,setTodos})=>{

    const handleOnClick = (id)=>{
       // e.preventDefault()
       //const deleteTodo = e.currentTarget.dataset.deleteTodo

       const remainingList =  todos.filter((todo)=>{
       return todo.id !== parseInt(id)
       }) 
       setTodos([...remainingList])} 

       const todoList = todos.length?(todos.map((todo)=>{
       return(
         <div className="collection-item" key={todo.id}>
         <span data-delete-todo={todo.id} onClick={()=>{handleOnClick(todo.id)}}>{todo.content}</span>
         </div>)
        })
    ):(<p className="center"> Sorry you have no todos</p> )
     return(
         <div className='todos collection'>
               {todoList}
         </div>
     )
}

export default Todo
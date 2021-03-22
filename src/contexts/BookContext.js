import React, {useState,createContext } from 'react';


export const BookContext = createContext()

const BookContextProvider = (props) => {

  const[states,setstates] = useState([
        {id:1,title:'the way of kings'},
        {id:2,title:'the name of the wind'},
        {id:3,title:'the final empire'}

    ])

    return ( 
        <BookContext.Provider value = {{states}}>
          {props.children}
        </BookContext.Provider>
     );
     
}
 
export default BookContextProvider;
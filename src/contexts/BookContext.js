import React, { createContext,useReducer,useEffect} from 'react';
import { BookReducer } from '../reducers/BookReducers';

export  const BookContext = createContext()

const BookContextProvider = (props) => {
    //useReducer(reducer,initSate,defaultState())
const[books,dispatch]  = useReducer(BookReducer,[],()=>{
   const localStoreObj = JSON.parse(localStorage.getItem('books'))
   return localStoreObj?localStoreObj:[]

})

useEffect(()=>{
localStorage.setItem('books',JSON.stringify(books))
},[books])

return( 
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider> 
     );
}
 
export default BookContextProvider;
import React,{useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
import {BookContext} from '../contexts/BookContext'

const BookList = () => {
const value = useContext(ThemeContext)
const{isLightTheme,light,dark}=value
const theme = isLightTheme?light:dark

const {states} = useContext(BookContext)
const bookList = states.map((state)=>{
      return(
        <ul key={state.id}>
            <li style={{background:theme.ui}}>{state.title}</li>
        </ul>
    
      )  
    })
    return ( 
    <div className='book-list' style={{color:theme.syntax,background:theme.bg}} >
         {bookList}
    </div>
         
     
     );
}
 
export default BookList;
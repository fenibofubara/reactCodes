import React,{useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'

const Navbar = () => {

   const value = useContext(ThemeContext)
   const authValue = useContext(AuthContext)
   const{isLightTheme,light,dark} = value
   const theme = isLightTheme ? light : dark
   const {isAuthenticated,toggleAuth} = authValue
 

    return ( 
        <nav style={{background:theme.ui,color:theme.syntax}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>{ isAuthenticated? 'Loggedin':'Loggedout'}</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
     );
}
 
export default Navbar;
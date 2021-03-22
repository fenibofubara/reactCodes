import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'


const ThemeToggle = () => {

const value = useContext(ThemeContext)
const {themeToggle} = value
    return ( 
        <button onClick={themeToggle}>Click To Toggle</button>
     );
}
 
export default ThemeToggle;
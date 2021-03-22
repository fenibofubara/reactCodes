import React,{createContext,useState} from 'react';
export const ThemeContext = createContext();


const ThemeContextProvider = ({children}) => {
  const[states,setstates] = useState(
    {
        isLightTheme:true,
        light:{syntax:'#555',ui:'#ddd',bg:'#eee'},
        dark:{syntax:'#ddd',ui:'#333',bg:'#555'}
    }
  )
  const themeToggle = ()=>{
    setstates({isLightTheme:!states.isLightTheme,light:states.light,dark:states.dark})
   
  }
  
    return ( 
        <ThemeContext.Provider value={{...states,themeToggle:themeToggle}}>
              {children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;
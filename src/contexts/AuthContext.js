import React, { createContext,useState } from 'react';

export const AuthContext =  createContext()

const AuthContextProvider = ({children}) => {
    const [states,setstates] = useState({
     isAuthenticated:false
    })
    const toggleAuth = ()=>{
        return setstates({isAuthenticated:!states.isAuthenticated})
    }
    return ( 
        <AuthContext.Provider value={{...states,toggleAuth:toggleAuth}}>
        {children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;
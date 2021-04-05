import { useReducer, useContext, createContext } from 'react'
import reducer from '../reducers/CounterReducers'

export const CounterStateContext = createContext()
export const CounterDispatchContext = createContext()

 const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
      <CounterDispatchContext.Provider value={dispatch}>
        <CounterStateContext.Provider value={state}>
          {children}
        </CounterStateContext.Provider>
      </CounterDispatchContext.Provider>
    )
  }

  export default CounterProvider
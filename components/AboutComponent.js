import Link from 'next/link'
import {useContext} from 'react'
import {CounterDispatchContext,CounterStateContext} from '../contexts/CounterContext'
const AboutComponent = () => {
    
const count= useContext(CounterStateContext)
const dispatch= useContext(CounterDispatchContext)
    
  const handleIncrease = (event) =>
  dispatch({
    type: 'INCREASE',
  })
const handleIncrease15 = (event) =>
  dispatch({
    type: 'INCREASE_BY',
    payload: 15,
  })
    return ( 
        <>
            <h1>ABOUT</h1>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease15}>Increase By 15</button>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
        </>
     );
}
 
export default AboutComponent;
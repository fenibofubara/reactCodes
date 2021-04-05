import Link from 'next/link'
import {useContext} from 'react'
import {CounterDispatchContext,CounterStateContext} from '../contexts/CounterContext'

const HomeComponent = () => {

   const count= useContext(CounterStateContext)
   const dispatch= useContext(CounterDispatchContext)
   const handleIncrease = (event) =>
   dispatch({
     type: 'INCREASE',
   })
 const handleDecrease = (event) =>
   dispatch({
     type: 'DECREASE',
   })
    return ( 
        <>
          <h1>HOME</h1>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
        </>
     );
}
 
export default HomeComponent;
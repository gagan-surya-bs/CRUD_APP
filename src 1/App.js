import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
//import store from './Redux/Store'
import { Increment , Decrement , Reset } from './Redux/Action/Action';



const App = () => {
    let value = useSelector(state => state);
    let dispatch = useDispatch();

    let { CounterReducer} = value
    return (
     
        <div>
                <h2>{CounterReducer}</h2>
                <button onClick={()=> dispatch(Increment())} >INCREMENT</button>
                <button onClick={()=> dispatch(Decrement())}>DECREMENT</button>
                <button onClick={()=> dispatch(Reset())}>RESET</button>
        </div>
      
    );
}

export default App

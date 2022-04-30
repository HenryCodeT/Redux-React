import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reset, restar, restar5, sumar, sumar5 } from '../actions/contadorActions';

const Contador = () => {
  
  const state = useSelector((state) => state);
  console.log(state);
  const disPatch = useDispatch();  

  return (
    <div>
      <h2>Contador Redux</h2>
      <nav>
        <button onClick={()=>disPatch(sumar5)}>+5</button>
        <button onClick={()=>disPatch(sumar)}>+1</button>
        <button onClick={()=>disPatch(reset)}>0</button>
        <button onClick={()=>disPatch(restar)}>-1</button>
        <button onClick={()=>disPatch(restar5)}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  )
}

export default Contador;
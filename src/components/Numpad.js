import React from 'react';
import deleted from '../assets/delete.png';

const Numpad = ({updateResult , calculate , clear , reset}) => {
  
  const createDigits =()=>{
    const digits=[]

    for (let i=1;i<10; i++){
        digits.push(
            <button onClick={()=>updateResult(i.toString())} key={i}>{i}</button>
        )
    }
    return digits
  }

  return (
    <div className="button">
        { createDigits() }
        <button onClick={()=>{updateResult('.')}}>.</button>
        <button onClick={()=>{updateResult('0')}}>0</button>
        <button className='button-calculate' onClick={calculate}>=</button>
        <button className='button-action' onClick={()=>{updateResult('+')}}>+</button>
        <button className='button-action' onClick={()=>{updateResult('-')}}>-</button>
        <button className='button-ce' onClick={clear}><img  src={deleted} alt='deleted' /></button>
        <button className='button-action' onClick={()=>{updateResult('/')}} >/</button>
        <button className='button-action' onClick={()=>{updateResult('*')}}>*</button>
        <button className='button-ce' onClick={reset}>C</button>
    </div>
  )
}

export default Numpad;


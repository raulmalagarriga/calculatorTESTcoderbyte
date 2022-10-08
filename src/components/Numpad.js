import React from 'react'

const Numpad = ({handleButtons}) => {
  
  return (
    <div className="button">
                <button name="("  onClick={ handleButtons }>(</button>
                <button name="CE"  onClick={ handleButtons }>CE</button>
                <button name=")"  onClick={ handleButtons }>)</button>
                <button name="C"  onClick={ handleButtons }>C</button><br/>


                <button name="1"  onClick={ handleButtons }>1</button>
                <button name="2"  onClick={ handleButtons }>2</button>
                <button name="3"  onClick={ handleButtons }>3</button>
                <button name="+"  onClick={ handleButtons }>+</button><br/>


                <button name="4"  onClick={ handleButtons }>4</button>
                <button name="5"  onClick={ handleButtons }>5</button>
                <button name="6"  onClick={ handleButtons }>6</button>
                <button name="-"  onClick={ handleButtons }>-</button><br/>

                <button name="7"  onClick={ handleButtons }>7</button>
                <button name="8"  onClick={ handleButtons }>8</button>
                <button name="9"  onClick={ handleButtons }>9</button>
                <button name="*"  onClick={ handleButtons }>x</button><br/>


                <button name="."  onClick={ handleButtons }>.</button>
                <button name="0"  onClick={ handleButtons }>0</button>
                <button name="="  onClick={ handleButtons }>=</button>
                <button name="/"  onClick={ handleButtons }>÷</button><br/>
            </div>
  )
}

export default Numpad;
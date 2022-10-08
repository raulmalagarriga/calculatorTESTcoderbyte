import React, { useState } from 'react';
import Numpad from './components/Numpad';
import Result from './components/Result';
import './App.css';

const App = () => {
  
  const [result, setResult] = useState('');
  const [output, setOutput]=useState('');
  const actions = ['/', '*', '+', '-', '.'];


  const updateResult = (value) => {
    if(
      actions.includes(value) & result === '' ||
      actions.includes(value) & actions.includes(result.slice(-1))
  ){
      return
  }
  setResult(result+value)

    if (!actions.includes(value)){
       setOutput(eval(result+value).toString())
    }
  }

  const calculate = () => {
    setResult(eval(result).toString());
  }

  const reset = () => {
    setResult('');
  }
  const clear = () => {
    if(result === ''){
        return
    }
    const value = result.slice(0,-1)
    setResult(value)
}

  return (
            <div>
                <div className="calculator-body">
                    <Result  result={result}/>
                    <Numpad  
                      updateResult={updateResult} 
                      calculate={calculate} 
                      clear={clear} 
                      reset={reset}
                    />
                    
                </div>
            </div>
  )
}

export default App;
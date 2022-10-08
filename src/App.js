import React, { useState } from 'react';
import Numpad from './components/Numpad';
import Result from './components/Result';
import './App.css';

const App = () => {
  
  const [result, setResult] = useState('');

  const handleButtons = (e) => {
    console.log(e.target.name);
  }
  
  return (
            <div>
                <div className="calculator-body">
                    <Result  result={result}/>
                    <Numpad  handleButtons={handleButtons}/>
                    
                </div>
            </div>
  )
}

export default App;
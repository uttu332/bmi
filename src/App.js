import React from 'react'
import { useMemo,useState } from 'react';
import './App.css';

const DEFAULT_WEIGHT=50
const DEFAULT_HEIGHT=150

function App() {
  const [height,setHeight]=useState(DEFAULT_HEIGHT)
  const [weight,setWeight]=useState(DEFAULT_WEIGHT)
  const onHeightChange=(event)=>{
    const inputHeight=event.target.value
    setHeight(inputHeight)
  }
  const onWeightChange=(event)=>{
    const inputWeight=event.target.value
    setWeight(inputWeight)
  }
  const output=useMemo(()=>{
    const calculatedHeight=height/100
    return(weight/(calculatedHeight*calculatedHeight)).toFixed(1)
  },[weight,height])
  return (
    <main>
      <h1>Bmi Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight:{weight} kg</p>
        <input className='input-slider' onChange={onWeightChange} type='range' step='1' min='40' max='220' />
        <p className='slider-output'>Height:{height} cm</p>
        <input className='input-slider' onChange={onHeightChange} type='range' min='140' max='220'/>
      </div>
      <div className='output-section'>
        <p>Your BMI is</p>
        <p className='output'>{output}</p>
      </div>
    </main>
  );
}

export default App;

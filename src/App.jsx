
import { useState } from 'react'
import './App.css'

function App() {
const [height,SetHeight]=useState('');
const [weight , SetWeight]=useState('');
const [value,SetValue]=useState(null);
const [status,SetStatus]=useState('')
const [error,SetErro]=useState('')
const CalculateBmi=()=>{
 const isvalidheight=/^\d+$/.test(height);
 const isvalidweight=/^\d+$/.test(weight);

  if(isvalidheight && isvalidweight){
    const Heightinmeter=height/100;
    const Bmivaluer= weight/(Heightinmeter*Heightinmeter);
    SetValue(Bmivaluer.toFixed(2));
    if( Bmivaluer<18.5){
      SetStatus('Under Weight');
    }
    else if(Bmivaluer>=18.5 && Bmivaluer <24){
      SetStatus('Normal Weight');
    }
    else if(Bmivaluer>=25 && Bmivaluer <29.9){
      SetStatus('Over Weight');
    }
    else{
      SetStatus('Obese')
    }
    SetErro('')
  }else{
    SetValue(null);
    SetStatus('');
    SetErro('Please Enter Only Numeric Value');
  }

}
const clear=()=>{
  SetHeight('');
  SetWeight('');
  SetValue(null);
  SetStatus('');
}

  return (
    <>
  <div className='container '>
    <h1>BMI CALCULATOR</h1>
    {error && <p>{error}</p>}
    <div className='input'>
      <div className="inp-1">
      <label htmlFor='height'>Height</label>
      <input value={height} onChange={(e)=>(SetHeight(e.target.value))} type="text" id='height' />
      </div>
      <div className="inp-2">
      <label htmlFor='width'>Weight</label>
      <input value={weight}  onChange={(e)=>(SetWeight(e.target.value))} type="text" id='width' />
      </div>
    </div>
    <div className="buttons">
    <button onClick={CalculateBmi} >Calculate Bmi</button>
    <button onClick={clear} className='btn'>Clear</button>
    </div>
   {value!==null && (<div className='result'>
      <p>Your BMI is : {value}</p>
    <p>Status : {status}</p>
    </div>)}
   
  </div>
    </>
  )
}

export default App

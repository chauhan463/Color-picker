import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color,setColor]=useState("");
  const [gap,setGap]=useState(10);
  const [error,setError]=useState(false)
  const [data,setData]=useState(new Values("#f15025").all(10))

const handleSubmit=(e)=>{
  e.preventDefault()

  try {
    let colors=new Values(color).all(parseInt(gap));
    setData(colors)
    console.log(colors)

    
  } catch (error) {
    setError(true)
    console.log(error)
  }

}




  return <>
  
  <section className='container'>
  <h3 className> Select % gap: </h3>
    <input type="number" onChange={(e)=>setGap(e.target.value)} name="" value={gap} id="" />
   <h3>Color Generator :</h3> 
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" name="color" id="" value={color} onChange={(e)=>setColor(e.target.value)} placeholder='#f15025' className={`${error ? "error" :null}`} />
      <button className="btn" type="submit">Submit</button>
    </form>

  </section>
  <section className='colors'>
   {data.map((color,index)=>{
    return <SingleColor key={index} {...color} index={index}   hexColor={color.hex}/>
   })}
  </section>
  </>
  
  
 



}

export default App

import React,{useEffect, useState} from 'react'


    function Counter() {
     const [counter,setCounter]=useState(0);
   

   useEffect(()=>{
    setCounter(counter + 1)
   },[])
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Click Me</button>
    </div>
  )
}

  export default  Counter ;





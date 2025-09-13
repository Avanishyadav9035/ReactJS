import React, { useState } from 'react'

const Counter = () => {
  const[count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100"'>
      <div className='flex flex-col bg-gray-300 w-[40%] m-auto justify-center items-center gap-6 p-5 border rounded-2xl my-auto'>
        <h1 className='font-bold'>Counter: {count}</h1>
        <div className='flex gap-6'> 
          <button onClick={()=>setCount(count+1)} className='font-semibold border rounded p-1'>Increment</button>
          <button onClick={()=>setCount(count-1)} className='font-semibold border rounded p-1'>Decrement</button>
          <button onClick={()=>setCount(0)} className='font-semibold border rounded p-1'>Reset</button>
       </div> 
      </div>
    </div>
  )
}

export default Counter

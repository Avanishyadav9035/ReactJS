import React , { useState }from 'react'
import Left from './Left'
import Right from './Right'

const Display = () => {
    const[todos, setTodos] =  useState([])
    const[title, setTitle] = useState("")
    const[desc, setDesc] = useState("")
     const[editId, setEditId] = useState(null)

  const startEdit = (task) =>{
        setTitle(task.title)
        setDesc(task.title)
        setEditId(task.id)
  }

  return (
      <div className="flex flex-col w-full h-screen bg-gray-100">
      {/* Heading at top center */}
       <h1 className="text-center text-3xl font-bold py-6 bg-blue-500 text-white shadow-md">
           Todo
           </h1>

         {/* Left + Right side by side */}
           <div className="flex flex-1 gap-6 p-6">
          {/* Left Box */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex justify-center items-start">
           <Left todo={todos} 
             setTodos={setTodos} 
             title={title} 
             setTitle={setTitle} 
             desc={desc} 
             setDesc={setDesc} 
             editId={editId} 
             setEditId={setEditId}/>
           </div>
             

          {/* Right Box */}
         <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex justify-center items-start">
          <Right todo={todos} setTodos={setTodos} startEdit={startEdit}/>
         </div>
     </div>
     </div>
  )
}

export default Display

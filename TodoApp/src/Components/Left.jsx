import React, {useState} from 'react'

const Left = ({todo, setTodos, title, setTitle, desc, setDesc, editId, setEditId}) => {
    

    const addTask = ()=>{
      if(title.trim() === "" || desc.trim() === "") return
      
      if(editId){
        const updatedTodos = todo.map((task)=>
          task.id === editId ? {...task, title, desc} : task  
      )
      setTodos(updatedTodos)
      setEditId(null)
      } else{
        setTodos([...todo, {title, desc, id:Date.now()}])
      }
      setTitle("")
      setDesc("")
    }
    

  return (
    <div className="flex">
     <div className="flex flex-col border p-8 m-auto rounded-2xl shadow-md w-96 gap-4">
    {/* Input */}
    <input
      type="text"
      value={title}
      placeholder="Enter a title"
      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onChange={(e)=>setTitle(e.target.value)}
    />

    {/* Textarea */}
    <textarea
      rows="5"
      cols="5"
      placeholder='enter your description'
      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      data-gramm="false"
      spellCheck="false"
      value={desc}
      onChange={(e)=>setDesc(e.target.value)}
    />

    {/* Button */}
    <div className="flex justify-center gap-4">
      <button
      onClick={addTask}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        {editId ? "Update Task" : "Add Task"}
      </button>
      
    </div>
  </div>
</div>

  )
}

export default Left

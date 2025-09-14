import React from "react";

const Right = ({ todo, setTodos, startEdit}) => {
  const removeTask = (id) => {
    const updatedTodo = todo.filter((task) => task.id !== id);
    setTodos(updatedTodo);
  };

  return (
    <div className="flex flex-col w-full gap-4">
      {todo.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks added yet</p>
      ) : (
        todo.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-2"
          >
            <h2 className="font-bold text-lg">{task.title}</h2>
            <p className="text-gray-700">{task.desc}</p>
            <div className="flex justify-between">
              <button
                onClick={() => removeTask(task.id)} // ✅ pass id here
                className="border rounded p-1 bg-red-500 text-white hover:bg-red-600 transition"
              >
                Remove
              </button>
              <button 
               onClick={()=>startEdit(task)}
              className="border rounded p-1 bg-yellow-500 hover:bg-yellow-700 transition">
                Edit
              </button>
            
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Right;

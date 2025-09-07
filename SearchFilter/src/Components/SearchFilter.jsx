import React, { useState } from 'react'

const SearchFilter = () => {
   const[searchTerm, setSearchTerm] = useState("")

  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
    "Strawberry",
  ];

   // Filtered list based on search

  const filteredItems = items.filter((item)=>
    item.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className='p-6 max-w-md mx-auto'>
     <h2 className='text-xl font-bold mb-4'>Search Filter Example</h2>

      {/* Search Input */}
      <input type="text" 
       placeholder='Search...'
       value={searchTerm}
       className="w-full border px-3 py-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
       onChange={(e)=>setSearchTerm(e.target.value)}
      />

       {/* Filtered List */}
       <ul className='space-y-2'>
        {
            filteredItems.length > 0 ?(
                filteredItems.map((item, index)=>(
                    <li key={index}
                     className='p-6 bg-gray-200 rounded hover:bg-gray-300'
                    >
                        {item}
                    </li>
                ))
            ):(
             <p className='text-gray-500'>No items Found</p>
            )
        }
       </ul>
    </div>
  )
}

export default SearchFilter

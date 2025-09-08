import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] =  useState({})
    const [success, setSuccess] =  useState("")

    const validate = ()=>{
        let tempErrors = {};
        let isValid = true;

        //email check
        if(!email){
            tempErrors.email = "Email is required";
            isValid = false
        } else if(!/\S+@\S+\.\S+/.test(email)){
            tempErrors.email = "Invalid email format";
            isValid = false
        }

        //password check
        if(!password){
            tempErrors.password = "Password Required"
            isValid = false
        } else if(password<6){
            tempErrors.password = "Password must be at least 6 characters";
            isValid = false;
        }
        setError(tempErrors);
       return isValid;
    }

    const handleSubmit =(e)=>{
          e.preventDefault()
          if(validate){
            setSuccess("✅ Login Successful!")
            setError({})
          } else {
            setSuccess("")
          }
    }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
       <form   onSubmit={handleSubmit}
        className='bg-white p-8 rounded-2xl shadow-lg w-96'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Login</h1>
        <div className='mb-4'>
            <label className='block mb-1 font-medium'>Email</label>
            <input type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            {error.email && (
                <p className='text-red-500 text-sm mt-1'>{error.email}</p>
            )}
        </div>
        <div className='mb-4'>
            <label className='block mb-1 font-medium'>Password</label>
            <input type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            {error.password && (
                <p className='text-red-500 text-sm mt-1'>{error.password}</p>
            )}
        </div>
        <button type='submit'
        className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2  rounded-lg transition'>
            Login
        </button>
           {/* Success Message */}
           {success && (
            <p className='text-green-600 text-center mt-4 font-medium'>
               {success} 
            </p>
           )}
       </form>
    </div>
  )
}

export default LoginForm

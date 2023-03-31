import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Login = () => {
    const [user, setUser] = useState('')
    const navigate = useNavigate()
    const login =() => {
        user ? navigate('/home'): navigate('/')
       localStorage.setItem('user', JSON.stringify(user))
       toast.success(`😁 welcome, ${user}`)
    }

  return (
    <div className="h-screen m-4 flex items-center justify-center flex-col mx-auto w-full space-y-5">
      <h1 className="text-xl capitalize font-bold text-blue-800">
        Input your username to play
      </h1>
      <input
        type="text"
        className="p-2 outline outline-blue-200 w-1/2 focus:outline-4 rounded"
        onChange={(e) => setUser(e.target.value)}
      />
      <Button
        onPress={login}
        disabled={!user}
        className={`rounded-2xl py-2 px-6  text-white w-max capitalize font-semibold ${
          user ? "bg-blue-500" : "bg-blue-100"
        }`}
        text={"login"}
      />
    </div>
  );
}

export default Login
import React from 'react'
import './App.css'
import config from './config/config'
import {authService} from './appwrite/'


export default function App() {
  // const user = {
  //   email : "sanjeet@gmail.com",
  //   password : "12345678"
  // }
  
  // console.log(authService.login(user))
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
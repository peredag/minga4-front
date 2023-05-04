import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import apiUrl from '../api'

function App() {
  const [count, setCount] = useState(0)

  console.log(apiUrl)
  console.log(process.env.NODE_ENV)

  return (
    <>
      <p className='font-bold text-3x1'>Hola claseeeee</p>
    </>
  )
}

export default App

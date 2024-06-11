import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import CreateForm from './Components/CreateForm/CreateForm'
import { Route, Routes } from 'react-router'
import DisplayData from './Components/DisplayData/DisplayData'




function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CreateForm />} /> 
        <Route path='/DisplayData' element={<DisplayData />} />
      </Routes>

    </>
  )
}

export default App

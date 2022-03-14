import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IniciarSesion from './layout/IniciarSesion'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<IniciarSesion />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App

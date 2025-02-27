import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {

  return (
    <main className="grid gap-4 p-4 grid-cols-[220px_1fr]">
      <Sidebar/>
      <Dashboard/>
    </main>
  )
}

export default App

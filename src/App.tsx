import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'



function App():React.JSX.Element {

  const { fromLanguage, setFromLanguages } = useStore()


  return (
    <>
    <div className="app">
      <h1>Google Translate</h1>
      <h3>{fromLanguage}</h3>
      <button onClick={() => setFromLanguages('en')} >Cambiar a Es</button>
    </div>

    </>
  )
}

export default App

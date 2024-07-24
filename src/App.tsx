import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App():React.JSX.Element {

  


  return (
    <>
    <div className="app">
      <h1>Google Translate</h1>
      <h3>{fromLanguage}</h3>
      <button onClick={handleFromLanguage} >Cambiar a Es</button>
    </div>

    </>
  )
}

export default App

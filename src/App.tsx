import React, { useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { State, Action } from './types/types'

const initialState:State = {
  fromLanguage : 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

function reducer(state: State, action:Action){

  const { type } = action

  if(type === 'INTERCHANGE_LANGUAGES'){

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    } 
  }

  if(type === 'SET_FROM_LANGUAGE'){

    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if(type === 'SET_TO_LANGUAGE'){
    
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if(type === 'SET_FROM_TEXT'){

    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if(type === 'SET_RESULT'){

    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }


  return state
}

function App():React.JSX.Element {

  const [ state, dispatch ] = useReducer(reducer, initialState)

  return (
    <>
    <div className="app">
      <h1>Google Translate</h1>
    </div>

    </>
  )
}

export default App

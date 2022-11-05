import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MainApp } from './09-UseContext/MainApp'
// import { Padre } from './07-tarea-memo/Padre'
// import { TodoApp } from './08-useReducer/TodoApp'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/memorize'
// import { Layout } from './05-UseLayoutEffect/Layout'
// import { FocusScreen } from './04-UseRef/FocusScreen'

// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FormWithCustomHook } from './02-UseEffect/FormWithCustomHook'
// import { HooksApp } from './HooksApp'
// import './08-useReducer/intro-reducer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
  <MainApp />
  {/* </React.StrictMode> */}
  </BrowserRouter>
)

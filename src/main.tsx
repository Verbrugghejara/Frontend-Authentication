import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './screens/index'
import './assets/tailwind.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

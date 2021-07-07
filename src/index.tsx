import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ThemeProviderContext from './provider/ThemeProviderContext'

ReactDOM.render(
  <ThemeProviderContext>
    <App />
  </ThemeProviderContext>,
  document.getElementById('root')
)

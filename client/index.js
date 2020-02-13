import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'Assets/custom.scss'
import App from 'Components/App'
import ErrorBoundary from 'Components/ErrorBoundary'

const refresh = () => render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
)

refresh()

if (module.hot) {
  module.hot.accept()
}

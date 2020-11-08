import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomeScreen} exact />
    </BrowserRouter>
  )
}

export default App

import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./components/Header"
import HomeScreen from "./screens/HomeScreen"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={HomeScreen} exact />
    </BrowserRouter>
  )
}

export default App

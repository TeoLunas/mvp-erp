import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./modules/home/Home"
import MainLayout from "./layouts/MainLayout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="/" index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


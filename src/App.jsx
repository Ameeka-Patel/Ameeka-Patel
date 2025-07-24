import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* main page */}
        <Route index element={<Home />}/>

        {/* not found */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

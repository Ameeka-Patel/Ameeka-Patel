import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import {Toaster} from "@/components/ui/toaster";

function App() {

  return (
    <>
    <Toaster />
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

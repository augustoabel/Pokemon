import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar"
import Content from "./pages/Content"
import Pokemons from "./pages/Pokemons"


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Content />}/>
            <Route path="/pokemons" element={<Pokemons />}/>
            <Route path="/contact" element={<Content />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

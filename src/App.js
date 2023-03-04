import NavBar from "./Navbar"
import Register from "./pages/Register"
import Home from "./pages/Home"
import About from "./pages/About"
import {Route, Routes } from "react-router-dom"

function App() {
  return (
   <>
   <NavBar />
   <div className = "container">
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/home" element = {<Home />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/register" element = {<Register />} />
    </Routes>
   </div>
   </>
  );
}

export default App;

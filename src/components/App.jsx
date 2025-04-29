
import React from "react";
// import Home from "./components/Home"
// import About from "./components/About"
// import Navigation from "./components/Navigation"
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";
import{ Routes,Route} from "react-router-dom"



const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    <Navigation/>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  )
}

export default App


import React from "react";
import Home from "./componant/Home"
import About from "./componant/About"
import Navigation from "./componant/Navigation"
import{ Routes,Route} from "react-router-dom"
import './../styles/App.css';

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

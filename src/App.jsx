import { Link, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return(
    <div>
      <h1 className="text-3xl text-center">My App</h1>
      {/* ✅ Navigation */}
      <Navbar />

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  )  
}

export default App;
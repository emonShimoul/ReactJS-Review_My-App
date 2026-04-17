import { Link, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

function App() {
  return(
    <div>
      <h1 className="text-3xl text-center">My App</h1>
      {/* ✅ Navigation */}
      <Navbar />

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )  
}

export default App;
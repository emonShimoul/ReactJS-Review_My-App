import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const {user, logout} = useAuth();

  return (
    <nav className="flex gap-4 justify-center my-4">
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/about">About</Link>

      {user && (
        <button onClick={logout} className="text-red-500">
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
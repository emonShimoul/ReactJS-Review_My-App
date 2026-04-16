import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-4 justify-center my-4">
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
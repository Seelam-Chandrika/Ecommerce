import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>LocalMart</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/user-login">User</Link>
        <Link to="/seller-login">Seller</Link>
      </div>
    </nav>
  );
}

export default Navbar;
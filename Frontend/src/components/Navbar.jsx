import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>App</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add-user">Add User</Link>
        <Link to="/users">Users List</Link>
      </div>
    </nav>
  );
}

export default Navbar;

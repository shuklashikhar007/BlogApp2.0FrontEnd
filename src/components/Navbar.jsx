import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const toggleDarkMode = () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : '');
  };

  // Enable saved theme on load
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }

  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        {token && <Link to="/create">Create</Link>}
      </div>
      <div>
        <button className="dark-toggle" onClick={toggleDarkMode}>🌓</button>
        {token ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


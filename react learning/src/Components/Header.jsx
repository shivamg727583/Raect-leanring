import { NavLink } from 'react-router-dom'

function Header() {
  const activeClass = ({ isActive }) => (isActive ? 'text-red-500' : '');

  return (
    <div className="flex items-center justify-center gap-6 h-16 p-4">
      <NavLink className={activeClass} to="/">Home</NavLink>
      <NavLink className={activeClass} to="/task">Task</NavLink>
      <NavLink className={activeClass} to="/about">About</NavLink>
      <NavLink className={activeClass} to="/form">Form</NavLink>
    </div>
  );
}

export default Header;

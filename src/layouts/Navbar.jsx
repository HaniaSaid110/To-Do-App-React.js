import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-white text-violet-700 font-semibold text-lg flex flex-row justify-center items-center ">
      <ul className="flex flex-row gap-1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/task">Tasks</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

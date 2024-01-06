import { Link } from "@remix-run/react";
import { CircleUserRound } from "lucide-react";

import { User } from "~/models/user.server";

interface NavBarProps {
  user?: User;
}

const NavBar = ({ user }: NavBarProps) => {
  return (
    <nav className="navbar justify-end">
      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <CircleUserRound />
          </div>
          <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <Link to="/login" className="link link-primary">
            Login
          </Link>
          <Link to="/join" className="link link-primary ml-4">
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;

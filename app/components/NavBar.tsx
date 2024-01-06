import { Form, Link } from "@remix-run/react";
import { CircleUserRound } from "lucide-react";

import Logo from "~/components/Logo";
import { useOptionalUser } from "~/utils";

const NavBar = () => {
  const user = useOptionalUser();

  return (
    <nav className="navbar justify-between">
      <Logo />
      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
            data-cy="avatar-btn"
          >
            <CircleUserRound />
          </div>
          <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Form method="post" action="/logout">
                <button type="submit">Logout</button>
              </Form>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <Link to="/login" className="link link-primary">
            Sign In
          </Link>
          <Link to="/join" className="link link-primary ml-4">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink
            to="/home"
            activeClassName="text-orange-500"
            className="text-gray-900 -m-1.5 p-1.5"
          >
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-sm font-semibold leading-6 ${
                isActive ? "text-orange-700 font-bold" : "text-gray-900"
              }`
            }
          >
            Home
          </NavLink>
          <Link
            to="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Marketplace
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Company
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-sm font-semibold leading-6 ${
                isActive ? "text-orange-700 font-bold" : "text-gray-900"
              }`
            }
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

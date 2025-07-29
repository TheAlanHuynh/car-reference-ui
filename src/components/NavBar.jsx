import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight hover:text-blue-400"
        >
          Alan Huynh
        </Link>

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          {["/", "/projects", "/blog", "/about"].map((path, index) => {
            const names = ["Home", "Projects", "Blog", "About"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-300"
                }
              >
                {names[index]}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800">
          {["/", "/projects", "/blog", "/about"].map((path, index) => {
            const names = ["Home", "Projects", "Blog", "About"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-blue-400 font-semibold"
                    : "block hover:text-blue-300"
                }
              >
                {names[index]}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
}

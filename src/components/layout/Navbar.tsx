import { NavLink } from "react-router-dom";
import { Home, Heart, Search, SlidersHorizontal, User } from "lucide-react";
import logo from "@/assets/images/logo.png";

const Navbar = () => {
  const mobileLinkStyle =
    "flex flex-col items-center gap-1 cursor-pointer transition-all duration-300";

  return (
    <>
      <div className="hidden sm:flex justify-around items-center sticky top-0 z-50 bg-white shadow-sm h-20">
        <div className="logo flex flex-col items-center">
          <img className="w-12" src={logo} alt="logo" />
          <p className="text-xl font-bold text-text-primary-blue">Safarni</p>
        </div>

        <ul className="flex gap-12">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-bold text-xl ${isActive ? "text-[#1E429F]" : "text-gray-600"} hover:text-[#1E429F]`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `font-bold text-xl ${isActive ? "text-[#1E429F]" : "text-gray-600"} hover:text-[#1E429F]`
              }
            >
              Favorite
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-6 items-center">
          <NavLink to="/search" className="text-gray-400 cursor-pointer">
            <Search />
          </NavLink>
          <NavLink to="/filters" className="text-gray-400 cursor-pointer">
            <SlidersHorizontal />
          </NavLink>
          <NavLink to="/profile" className="w-8 h-8 rounded-full bg-gray-200">
            <div className="flex h-full w-full items-center justify-center">
              <User className="w-5 h-5 text-gray-500" />
            </div>
          </NavLink>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden">
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] py-2 px-6 flex justify-around items-end z-50 rounded-t-[30px] pb-4">
          {/* Home Link */}
          <NavLink to="/" className={mobileLinkStyle}>
            {({ isActive }) => (
              <>
                <div
                  className={`${isActive ? "bg-text-secondary-blue p-3 rounded-full shadow-lg -mt-10 border-4 border-white text-white" : "text-gray-400"} transition-all`}
                >
                  <Home size={24} />
                </div>
                <span
                  className={`text-xs font-medium ${isActive ? "text-text-secondary-blue" : "text-gray-400"}`}
                >
                  Home
                </span>
                <div className={`${isActive ? 'bg-text-secondary-blue p-3 rounded-full shadow-lg -mt-10 border-4 border-white text-white' : 'text-gray-400'} transition-all`}>
                  <Home size={24} />
                </div>
                <span className={`text-xs font-medium ${isActive ? 'text-text-secondary-blue' : 'text-gray-400'}`}>Home</span>
              </>
            )}
          </NavLink>

          {/* Favorite Link */}
          <NavLink to="/favorites" className={mobileLinkStyle}>
            {({ isActive }) => (
              <>
                <div
                  className={`${isActive ? "bg-text-secondary-blue p-3 rounded-full shadow-lg -mt-10 border-4 border-white text-white" : "text-gray-400"} transition-all`}
                >
                  <Heart size={24} />
                </div>
                <span
                  className={`text-xs font-medium ${isActive ? "text-text-secondary-blue" : "text-gray-400"}`}
                >
                  Favorite
                </span>
                <div className={`${isActive ? 'bg-text-secondary-blue p-3 rounded-full shadow-lg -mt-10 border-4 border-white text-white' : 'text-gray-400'} transition-all`}>
                  <Heart size={24} />
                </div>
                <span className={`text-xs font-medium ${isActive ? 'text-text-secondary-blue' : 'text-gray-400'}`}>Favorite</span>
              </>
            )}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

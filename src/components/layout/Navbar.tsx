import { NavLink } from 'react-router-dom';
import { Bell, Heart } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar";

const Navbar = () => {
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Find Doctors', to: '/find-doctors' },
    { name: 'Online Consultation', to: '/consultation' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white px-4 md:px-8">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        {/* Brand Identity */}
        <NavLink to="/" className="flex flex-col items-start focus-visible:outline-none">
          <span className="text-2xl font-bold tracking-tight text-[#006D77]">
            MediLink
          </span>
          <span className="text-[10px] font-medium leading-none text-[#006D77]/80">
            Your Health, Connected.
          </span>
        </NavLink>

        {/* Navigation Links */}
        <nav className="hidden h-full items-center space-x-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `relative flex h-full items-center text-sm font-medium transition-colors focus-visible:outline-none ${isActive
                  ? "text-[#006D77]"
                  : "text-gray-400 hover:text-[#006D77]/70"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-t-full bg-[#006D77]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-6">
          <button
            type="button"
            aria-label="Notifications"
            className="text-[#006D77] transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none"
          >
            <Bell className="h-6 w-6" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Favorites"
            className="text-[#006D77] transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none"
          >
            <Heart className="h-6 w-6" strokeWidth={1.5} />
          </button>

          <Avatar className="h-11 w-11 cursor-pointer ring-2 ring-transparent transition-all hover:ring-gray-100">
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User Profile"
              className="object-cover"
            />
            <AvatarFallback className="bg-[#006D77] text-white">JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
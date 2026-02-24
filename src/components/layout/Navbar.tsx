export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-[#097178]">
            Medica
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-700 hover:text-[#097178]">Home</a>
            <a href="/find-doctor" className="text-gray-700 hover:text-[#097178]">Find Doctor</a>
            <a href="/favorites" className="text-gray-700 hover:text-[#097178]">Favorites</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

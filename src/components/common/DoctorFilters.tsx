import { useState } from "react";
import { ChevronUp } from "lucide-react"; 

const DoctorFilters = () => {
  const [filters, setFilters] = useState({
    specialty: "",
    gender: "",
    location: "",
    consultationType: "",
    availableToday: false,
  });

  const [isOpen, setIsOpen] = useState(true); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSearch = () => {
    console.log("Searching with filters:", filters);
  };

  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-lg">
      <div 
        className="flex items-center justify-between mb-6 cursor-pointer text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-bold text-lg uppercase text-chart-2 tracking-wider">Filters</h2>
        <ChevronUp 
          size={20} 
          className={`transition-transform duration-300 ${!isOpen ? "rotate-180" : ""}`} 
        />
      </div>

      {isOpen && (
        <div className="flex flex-col gap-6 animate-in slide-in-from-top-2 fade-in duration-300">
          
          {/* --- Text Input: Specialty --- */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Specialty
            </label>
            <input
              type="text"
              name="specialty"
              value={filters.specialty}
              onChange={handleChange}
              className="w-full p-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* --- Radio Group: Gender --- */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Gender
            </label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  className="w-5 h-5 accent-chart-2 cursor-pointer" 
                />
                <span className="text-muted-foreground text-sm">Male</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  className="w-5 h-5 accent-chart-2 cursor-pointer"
                />
                <span className="text-muted-foreground text-sm">Female</span>
              </label>
            </div>
          </div>

          {/* --- Text Input: Location --- */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="w-full p-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* --- Radio Group: Consultation Type --- */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Consultation Type
            </label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="consultationType"
                  value="Online"
                  onChange={handleChange}
                  className="w-5 h-5 accent-chart-2 cursor-pointer"
                />
                <span className="text-muted-foreground text-sm">Online</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="consultationType"
                  value="Clinic"
                  onChange={handleChange}
                  className="w-5 h-5 accent-chart-2 cursor-pointer"
                />
                <span className="text-muted-foreground text-sm">Clinic</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer mt-2">
                <input
                  type="checkbox"
                  name="availableToday"
                  checked={filters.availableToday}
                  onChange={handleChange}
                  className="w-5 h-5 accent-chart-2 rounded-full cursor-pointer appearance-none border-2 border-primary checked:bg-chart-2 checked:ring-2 checked:ring-white checked:ring-inset"
                />
                <span className="text-muted-foreground text-sm uppercase">Available Today</span>
              </label>
            </div>
          </div>

          {/* --- Search Button --- */}
          <button
            onClick={handleSearch}
            className="w-full mt-4 bg-chart-2 text-white font-bold py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Search
          </button>
        </div>
      )}
    </div>
  );
}
export default DoctorFilters;
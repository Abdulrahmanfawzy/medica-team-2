
import { Search , MapPin , SlidersHorizontal , RotateCw} from "lucide-react";


const SearchBar = () => {
    return (
        <div className="container-fluid bg-bg-search">
            <div className="container mx-auto flex gap-5 ">
                <div className="py-12 w-2/3 flex gap-5">
                    <div className="flex items-center rounded-lg w-10/12 bg-white p-2 border-2 border-bg-search-border">
                        <Search className="text-base text-ring sm:text-sm/6" />
                        <input
                            id="search"
                            name="search"
                            type="text"
                            placeholder="Search by doctor name or speciality"
                            className="block py-2.5 pr-3 pl-1 w-full text-base text-black placeholder:text-ring focus:outline-none sm:text-sm/6"
                        />
                    </div>
                    
                    <div className="flex items-center rounded-lg bg-white p-2 border-2 border-bg-search-border">
                        <MapPin className="text-base text-ring sm:text-sm/6" />
                        <input
                            id="search"
                            name="search"
                            type="text"
                            placeholder="City"
                            className="block py-2.5 pr-3 pl-1 w-full text-base text-black placeholder:text-ring focus:outline-none"
                        />
                    </div>
                </div>

                <div className="py-12 flex w-1/3 gap-5">
                    <div className="flex items-center rounded-lg w-1/2 bg-white p-2 border-2 border-chart-2">
                        <SlidersHorizontal className="text-chart-2" />
                        <button
                            id="filter"
                            name="filter"
                            className="py-2.5 pr-3 cursor-pointer pl-1 font-bold w-full text-chart-2 focus:outline-none"
                        >
                            Filter
                        </button>
                    </div>
                    <div className="flex items-center rounded-lg cursor-pointer w-1/2 bg-white p-2 border-2 border-chart-2">
                        <RotateCw className="text-chart-2" />
                        <button
                            id="refresh"
                            name="refresh"
                            className="py-2.5 pr-3 cursor-pointer pl-1 font-bold w-full cursor-pointer text-chart-2 focus:outline-none"
                        >
                            Refresh
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SearchBar;
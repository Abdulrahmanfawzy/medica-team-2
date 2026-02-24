import SearchBar from "../components/common/Search";
import DoctorFilters from "../components/common/DoctorFilters";
import SearchResuls from "../components/common/SearchResuls";

const FindDoctor = () => {
    return (
        <>
            <SearchBar />
            <div className="container flex justify-between gap-6 mx-auto">
                <DoctorFilters />
                <SearchResuls />
            </div>
        </>
    );
};
export default FindDoctor;
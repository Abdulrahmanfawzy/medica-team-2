import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchResuls = () => {
    const navigate = useNavigate();
    const doctors = [
        {
            id: 1,
            name: "Dr. Sarah Ahmed",
            specialty: "Dermatologist",
            rating: 4.5,
            image: "/path-to-image.jpg",
            availableToday: true,
        },
        {
            id: 2,
            name: "Dr. Lee Jung Min",
            specialty: "Orthopedic Surgeon",
            rating: 4.5,
            image: "/path-to-image2.jpg",
            availableToday: true,
        },
        {
            id: 3,
            name: "Dr. Lee Jung Min",
            specialty: "Orthopedic Surgeon",
            rating: 4.5,
            image: "/path-to-image2.jpg",
            availableToday: true,
        },
        {
            id: 4,
            name: "Dr. Lee Jung Min",
            specialty: "Orthopedic Surgeon",
            rating: 4.5,
            image: "/path-to-image2.jpg",
            availableToday: true,
        },
        {
            id: 5,
            name: "Dr. Lee Jung Min",
            specialty: "Orthopedic Surgeon",
            rating: 4.5,
            image: "/path-to-image2.jpg",
            availableToday: true,
        },
        {
            id: 6,
            name: "Dr. Lee Jung Min",
            specialty: "Orthopedic Surgeon",
            rating: 4.5,
            image: "/path-to-image2.jpg",
            availableToday: true,
        },
        {
            id: 7,
            name: "Dr. Lee Jung Min",
            specialty: "Orthopedic Surgeon",
            rating: 4.5,
            image: "/path-to-image2.jpg",
            availableToday: true,
        },
        {
            id: 8,
            name: "Dr. Lee Jung Min",
            specialty: "Orthopedic Surgeon",
            rating: 4.5,
            image: "/path-to-image2.jpg",
            availableToday: true,
        },
        {
            id: 9,
            name: "Dr. Lee Jung Min",
            specialty: "Orthopedic Surgeon",
            rating: 4.5,
            image: "/path-to-image2.jpg",
            availableToday: true,
        },
        {
            id: 10,
            name: "Dr. Lee Jung Min",
            specialty: "Orthopedic Surgeon",
            rating: 4.5,
            image: "/path-to-image2.jpg",
            availableToday: true,
        },
        {
            id: 11,
            name: "Dr. Lee Jung Min",
            specialty: "Orthopedic Surgeon",
            rating: 4.5,
            image: "/path-to-image2.jpg",
            availableToday: true,
        },
        {
            id: 12,
            name: "Dr. Lee Jung Min",
            specialty: "Orthopedic Surgeon",
            rating: 4.5,
            image: "/path-to-image2.jpg",
            availableToday: true,
        },
    ]
    const itemsPerPage = 4;
    const totalPages = Math.ceil(doctors.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <>
            <div className="container pt-10 mx-auto">
                <div className="mb-6">
                    <h2 className="text-3xl text-chart-2 font-semibold mb-2">Search Results</h2>
                    <p className="text-gray-600">{doctors.length} doctors found</p>
                </div>
                <div key={currentPage} className="animate-fade-in grid grid-cols-1 md:grid-cols-2 w-full  gap-4">
                    {doctors.length === 0 ? (
                        <div className="text-center">No doctors found</div>
                    ) : (
                        doctors.slice(startIndex, endIndex).map((doctor) => (
                            <div key={doctor.id}
                                onClick={() => navigate(`/doctor/${doctor.id}`, { state: { doctor } })}
                                className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow">
                                <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-lg text-chart-2 font-bold mb-2">{doctor.name}</h3>
                                <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                                <div className="flex items-center mb-2">
                                    <span className="text-yellow-500 mr-1">★</span>
                                    <span className="text-gray-700">{doctor.rating}</span>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate("/booking");
                                    }}
                                    className="bg-chart-2 cursor-pointer w-full text-white px-4 py-2 rounded-lg"
                                >
                                    Book Appointment
                                </button>
                            </div>
                        ))
                    )}
                </div>
                {
                    totalPages > 1 && (
                        <div className="flex justify-center animate-fade-in m-6">
                            {
                                currentPage > 1 && (
                                    <button onClick={() => setCurrentPage(currentPage - 1)}
                                        className="px-4 border border-chart-2 text-chart-2 font-semibold py-2 cursor-pointer w-[130px] rounded-lg">Previous</button>
                                )
                            }
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button key={i} onClick={() => setCurrentPage(i + 1)}
                                    className={`px-4 py-2 cursor-pointer rounded-lg ${currentPage === i + 1 ? "bg-chart-2 text-white" : ""}`}>{i + 1}</button>
                            ))}
                            {
                                currentPage < totalPages && (
                                    <button onClick={() => setCurrentPage(currentPage + 1)}
                                        className="px-4 border border-chart-2 text-chart-2 font-semibold py-2 cursor-pointer w-[130px] rounded-lg">Next</button>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SearchResuls;
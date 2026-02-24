import React from 'react';
import { Star } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import sarahAhmed from "../../assets/sarahAhmed.jpg";
import leeJungMin from "../../assets/leeJungMin.jpg";
import ahmedAli from "../../assets/ahmedAli.jpg";

/**
 * Interface for Doctor data
 */
interface Doctor {
    id: string;
    name: string;
    specialty: string;
    rating: number;
    imageUrl: string;
    availableToday: boolean;
}

const TOP_DOCTORS: Doctor[] = [
    {
        id: '1',
        name: 'Dr. Sarah Ahmed',
        specialty: 'Dermatologist',
        rating: 4.5,
        imageUrl: sarahAhmed,
        availableToday: true,
    },
    {
        id: '2',
        name: 'Dr. Lee Jung Min',
        specialty: 'Orthopedic Surgeon',
        rating: 4.5,
        imageUrl: leeJungMin,
        availableToday: true,
    },
    {
        id: '3',
        name: 'Dr. Ahmed Ali',
        specialty: 'Brain and nerves',
        rating: 4.5,
        imageUrl: ahmedAli,
        availableToday: true,
    },
];

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
            ))}
            <Star className="w-4 h-4 text-[#D1D5DB]" />
            <span className="text-xs text-gray-600 ml-1 font-medium">{rating.toFixed(1)}</span>
        </div>
    );
};

const TopRatedDoctors: React.FC = () => {
    return (
        <section className="bg-[#F8F9FA] py-16 px-4">
            <div className="max-w-[1248px] mx-auto">
                <h2 className="text-[#042D2F] font-poppins font-bold text-3xl mb-10 text-left">
                    Top-Rated Doctors
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {TOP_DOCTORS.map((doctor) => (
                        <Card key={doctor.id} className="overflow-hidden border border-gray-200 rounded-xl shadow-none bg-white">
                            <CardHeader className="p-4">
                                <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-100">
                                    <img
                                        src={doctor.imageUrl}
                                        alt={doctor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </CardHeader>

                            <CardContent className="px-4 pb-2 space-y-2">
                                <h3 className="text-[#07595F] font-bold text-lg leading-tight">
                                    {doctor.name}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium">
                                    {doctor.specialty}
                                </p>

                                <RatingStars rating={doctor.rating} />

                                {doctor.availableToday && (
                                    <div className="pt-1">
                                        <span className="inline-block px-3 py-1 rounded-full border border-gray-200 text-[10px] text-gray-500 font-medium">
                                            Available times today
                                        </span>
                                    </div>
                                )}
                            </CardContent>

                            <CardFooter className="p-4">
                                {/* تم استخدام المكون Button المستورد هنا */}
                                <Button className="w-full h-[56px] bg-[#097178] hover:bg-[#07595F] text-white font-bold rounded-lg transition-colors text-sm border-none">
                                    Book Appointment
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="flex justify-center">
                    {/* تم استخدام المكون Button المستورد هنا أيضاً مع خاصية الـ outline */}
                    <Button variant="outline" className="px-10 h-[56px] border-[#097178] text-[#07595F] font-bold rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        View All Doctors
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TopRatedDoctors;
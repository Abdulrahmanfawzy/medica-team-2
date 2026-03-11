import React from 'react';
import { Card } from "@/components/ui/card";
import {
    Stethoscope,
    Baby,
    HeartPulse,
    Bone,
    Brain,
    Activity
} from "lucide-react";

interface Specialty {
    id: string;
    name: string;
    icon: React.ReactNode;
}

const specialties: Specialty[] = [
    {
        id: '1',
        name: 'Dermatology',
        icon: <Stethoscope className="w-8 h-8 text-[#07595F]" />,
    },
    {
        id: '2',
        name: 'Pediatrics',
        icon: <Baby className="w-8 h-8 text-[#07595F]" />,
    },
    {
        id: '3',
        name: 'Cardiology',
        icon: <HeartPulse className="w-8 h-8 text-[#07595F]" />,
    },
    {
        id: '4',
        name: 'Orthopedics',
        icon: <Bone className="w-8 h-8 text-[#07595F]" />,
    },
    {
        id: '5',
        name: 'Neurology',
        icon: <Brain className="w-8 h-8 text-[#07595F]" />,
    },
    {
        id: '6',
        name: 'Dentistry',
        icon: <Activity className="w-8 h-8 text-[#07595F]" />,
    },
];

const SpecialtySection: React.FC = () => {
    return (
        <section className="w-[1440px] h-[247px] mx-auto mt-[24px] mb-[40px]  flex flex-col justify-center">
            <div className="w-[1248px] mx-auto">
                {/* Section Heading: Fixed Height 60px as requested */}
                <h2 className="h-[60px] flex justify-center items-center font-['Poppins'] font-semibold text-[40px] text-[#07595F] mb-[24px]">
                    Browse by Specialty
                </h2>

                {/* Specialties Grid: Removed red bg, kept 24px gap and 96px padding */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[24px]">
                    {specialties.map((specialty) => (
                        <Card
                            key={specialty.id}
                            className="w-[188px] h-[163px] flex flex-col items-center justify-center border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-[16px] gap-4 cursor-pointer"
                        >
                            {/* Icon Container */}
                            <div className="w-[64px] h-[64px] rounded-full bg-[#F1F5F9] flex items-center justify-center">
                                {specialty.icon}
                            </div>

                            {/* Specialty Name */}
                            <span className="text-[#4B5563] font-['Poppins'] font-medium text-[18px] text-center">
                                {specialty.name}
                            </span>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialtySection;
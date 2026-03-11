import { useNavigate } from "react-router-dom";
import { Check, Calendar, Link, Home, PlusCircle, Headphones } from "lucide-react";

export default function StepE() {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-4xl mx-auto py-10 px-4 flex flex-col items-center">

            <div className="flex flex-col items-center mb-8">
                <div className="w-28 h-28 bg-[#00A651] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-[#00A651]/20">
                    <Check size={40} color="white" strokeWidth={4} />
                </div>
                <h2 className="text-3xl font-bold text-[#097178] mb-1">Booking Confirmed!</h2>
                <p className="text-gray-400 text-sm">Your appointment has been successfully scheduled</p>
            </div>

            <div className="w-full bg-[#f3f4f6] rounded-xl py-4 px-6 text-center mb-6 border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[2px] mb-1">Booking Reference Number</p>
                <p className="text-lg font-bold text-gray-700 uppercase tracking-tight">BK-2025-001234</p>
            </div>

            <div className="w-full border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm mb-6">
                <div className="bg-[#097178] px-5 py-3 text-white font-bold text-[11px] uppercase tracking-wider">
                    Appointment Details
                </div>

                <div className="p-8">
                    <div className="flex gap-5 items-center mb-8">
                        <div className="w-24 h-20 rounded-xl overflow-hidden border border-gray-100 shadow-sm shrink-0">
                            <img
                                src="src/assets/doctor1.jpg"
                                alt="Doctor"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 text-lg leading-tight">Dr. Sarah Johnson</h4>
                            <p className="text-xs text-gray-400 mb-2">Dermatologist</p>
                            <span className="text-[10px] font-bold text-[#097178] bg-[#f0f9fa] border border-[#cffafe] px-2 py-1 rounded-md">
                                Online Consultation
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-gray-50">
                        <div className="flex gap-4">
                            <Calendar size={20} className="text-gray-300 shrink-0" />
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">Date & Time</p>
                                <p className="text-xs text-gray-500">[Date: 2025-01-29]</p>
                                <p className="text-xs text-gray-500">[Time: 17:00]</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Link size={20} className="text-gray-300 shrink-0" />
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">Online Link</p>
                                <p className="text-[10px] text-gray-400 leading-relaxed italic">
                                    [Video consultation link will be sent via email]
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="py-6">
                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-5 tracking-widest">Patient Information</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                            <div>
                                <p className="text-[10px] text-gray-400 font-medium uppercase">Name</p>
                                <p className="text-sm font-bold text-gray-700">Sama</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-medium uppercase">Phone</p>
                                <p className="text-sm font-bold text-gray-700">01265489625</p>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-[10px] text-gray-400 font-medium uppercase">Email</p>
                                <p className="text-sm font-bold text-gray-700">s@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 pt-2">
                        <button className="flex-1 py-3 border border-[#097178] text-[#097178] text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#f0f9fa] transition-all">
                            <Calendar size={16} /> Add to Calendar
                        </button>
                        <button className="flex-1 py-3 bg-[#097178] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#07595f] shadow-md transition-all">
                            Join Consultation
                        </button>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 text-[#097178] text-[11px] font-bold py-4 mt-2 border-t border-gray-50">
                        <Headphones size={14} /> Contact Clinic
                    </button>
                </div>
            </div>

            <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 mb-8 shadow-sm">
                <p className="text-xs font-bold text-gray-800 mb-4 uppercase tracking-widest">Important Information</p>
                <ul className="text-medium text-gray-500 space-y-2.5 list-disc pl-5 leading-relaxed">
                    <li>You will receive a video consultation link via email 15 minutes before your appointment</li>
                    <li>To cancel or reschedule, please contact the clinic at least 24 hours in advance</li>
                    <li>Ensure you have a stable internet connection and a quiet environment</li>
                </ul>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                    onClick={() => navigate("/")}
                    className="py-4 border border-[#097178] text-[#097178] text-xs font-bold rounded-xl uppercase tracking-[2px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                >
                    <Home size={18} /> Return to Home
                </button>
                <button
                    onClick={() => {
                        window.location.href = "/booking";
                    }}
                    className="py-4 bg-[#097178] text-white text-xs font-bold rounded-xl uppercase tracking-[2px] flex items-center justify-center gap-2 hover:bg-[#07595f] transition-all"
                >
                    <PlusCircle size={18} /> Book Another Appointment
                </button>
            </div>
        </div>
    );
}
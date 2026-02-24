import { useState } from "react";
import { useSteps } from "@/lib/providers/StepsContext";
import { CreditCard, Banknote, ChevronUp } from "lucide-react";

export default function StepD() {
    const { bookingData, setBookingData, changeStep } = useSteps();
    const [isFormOpen, setIsFormOpen] = useState(true);

    const handleSelectMethod = (method: "cash" | "online") => {
        setBookingData({ ...bookingData, paymentMethod: method });
        if (method === "online") {
            setIsFormOpen(true);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="flex-1 flex flex-col gap-6">
                <h3 className="text-xl font-bold text-[#021618]">Payment Method</h3>

                <div
                    onClick={() => handleSelectMethod("cash")}
                    className={`p-4 border rounded-xl flex items-center gap-4 cursor-pointer transition-all duration-300 ${bookingData.paymentMethod === "cash"
                            ? "border-2 border-[#097178] bg-[#097178] text-white"
                            : "border-[#b3b3b3] bg-white text-black"
                        }`}
                >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${bookingData.paymentMethod === 'cash' ? 'border-white' : 'border-gray-400'
                        }`}>
                        {bookingData.paymentMethod === 'cash' && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                    </div>
                    <Banknote className={`${bookingData.paymentMethod === 'cash' ? 'text-white' : 'text-[#097178]'}`} />
                    <div>
                        <p className="font-bold">Pay at Clinic (Cash)</p>
                        <p className={`text-sm ${bookingData.paymentMethod === 'cash' ? 'text-white/90' : 'text-gray-500'}`}>
                            Pay when you arrive at the clinic
                        </p>
                    </div>
                </div>

                <div className={`border rounded-xl flex flex-col overflow-hidden transition-all duration-300 ${bookingData.paymentMethod === "online" ? "border-2 border-[#097178]" : "border-[#b3b3b3]"
                    }`}>
                    <div
                        className={`p-4 flex items-center gap-4 cursor-pointer transition-colors duration-300 ${bookingData.paymentMethod === "online" ? "bg-[#097178] text-white" : "bg-white text-black"
                            }`}
                        onClick={() => {
                            if (bookingData.paymentMethod !== "online") {
                                handleSelectMethod("online");
                            } else {
                                setIsFormOpen(!isFormOpen);
                            }
                        }}
                    >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${bookingData.paymentMethod === 'online' ? 'border-white' : 'border-gray-400'
                            }`}>
                            {bookingData.paymentMethod === 'online' && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                        </div>
                        <CreditCard className={`${bookingData.paymentMethod === 'online' ? 'text-white' : 'text-[#097178]'}`} />
                        <div className="flex-1">
                            <p className="font-bold">Online Payment</p>
                            <p className={`text-sm ${bookingData.paymentMethod === 'online' ? 'text-white/90' : 'text-gray-500'}`}>
                                Pay now with credit/debit card
                            </p>
                        </div>
                        {bookingData.paymentMethod === "online" && (
                            <div className={`transition-transform duration-300 ${isFormOpen ? "" : "rotate-180"}`}>
                                <ChevronUp />
                            </div>
                        )}
                    </div>

                    <div className={`grid transition-all duration-300 ease-in-out ${isFormOpen && bookingData.paymentMethod === "online" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}>
                        <div className="overflow-hidden">
                            <div className="p-6 bg-white flex flex-col gap-4 border-t border-gray-100 text-black">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase text-left block">Card Number</label>
                                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-3 bg-[#fcfcfc] border border-gray-200 rounded-lg outline-none focus:border-[#097178]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase text-left block">Card Name Holder</label>
                                    <input type="text" placeholder="Name on card" className="w-full p-3 bg-[#fcfcfc] border border-gray-200 rounded-lg outline-none focus:border-[#097178]" />
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase text-left block">Expiry Date</label>
                                        <div className="flex gap-2">
                                            <select className="flex-1 p-3 bg-[#fcfcfc] border border-gray-200 rounded-lg text-gray-400 outline-none"><option>Month</option></select>
                                            <select className="flex-1 p-3 bg-[#fcfcfc] border border-gray-200 rounded-lg text-gray-400 outline-none"><option>Year</option></select>
                                        </div>
                                    </div>
                                    <div className="w-[120px] space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase text-left block">CVC</label>
                                        <input type="text" placeholder="123" className="w-full p-3 bg-[#fcfcfc] border border-gray-200 rounded-lg outline-none focus:border-[#097178]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <button onClick={() => changeStep(3)} className="px-12 py-3 rounded-lg border border-[#097178] text-[#097178] font-bold hover:bg-[#097178]/5 transition-colors">Back</button>
                    <button onClick={() => changeStep(5)} className="px-12 py-3 rounded-lg bg-[#097178] text-white font-bold hover:bg-[#07595f] transition-colors">Continue</button>
                </div>
            </div>

            <div className="w-full lg:w-[380px]">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-black">
                    <h3 className="text-gray-400 text-sm font-bold uppercase mb-6 tracking-widest">Price Summary</h3>
                    <div className="space-y-4 border-b border-dashed border-gray-200 pb-6">
                        <div className="flex justify-between text-gray-600">
                            <span>Consultation Fee:</span>
                            <span className="font-bold text-black">$100</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Service Fee:</span>
                            <span className="font-bold text-black">$10</span>
                        </div>
                    </div>
                    <div className="flex justify-between pt-6 items-center">
                        <span className="text-lg font-bold text-[#097178]">TOTAL:</span>
                        <span className="text-2xl font-black text-[#097178]">$110</span>
                    </div>
                </div>
                <div className="mt-4 p-4 border border-gray-200 rounded-xl text-center text-gray-500 font-medium bg-white">
                    Visit Type: Online
                </div>
            </div>
        </div>
    );
}
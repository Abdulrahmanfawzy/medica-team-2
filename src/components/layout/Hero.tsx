
import HeroImg from "../../assets/heroimg.jpg";


import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin } from "lucide-react"

const Hero: React.FC = () => {
    return (
        <section className="w-full flex justify-center">
            {/* Fixed 1440px container */}
            <div className="relative w-[1440px] h-[600px] max-w-full overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center py-[48px]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(4, 45, 47, 0.7), rgba(4, 45, 47, 0.7)), url(${HeroImg})`,
                    }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 gap-[40px]">

                    {/* Headline */}
                    <h1 className="text-[#E7FCFD] w-[872px] h-[168px] max-w-full font-poppins font-semibold text-[56px] px-[8px] py-[16px]">
                        Find Your Doctor & Book in 60 Seconds
                    </h1>

                    {/* Description */}
                    <p className="text-[#D0F9FB] w-[872px] h-[72px] max-w-full font-poppins font-normal text-[24px] px-[8px] py-[16px]">
                        Connect with trusted healthcare professionals and get the care you need, when you need it.
                    </p>

                    {/* Search Card */}
                    <div className="w-[872px] h-[184px] max-w-full rounded-[16px] px-[24px] py-[24px] gap-x-[24px] gap-y-[24px] bg-[#FCFCFC] flex flex-col shadow-sm">

                        {/* Inputs Row */}
                        <div className="flex flex-col md:flex-row gap-x-[24px] gap-y-[24px]">

                            {/* Doctor Input */}
                            <div className="relative flex-1 h-[56px]">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input
                                    type="text"
                                    placeholder="Search by doctor name or specialty"
                                    className="pl-10 h-[56px] w-full border-[#E5E7EB] rounded-[8px]"
                                />
                            </div>

                            {/* City Input */}
                            <div className="relative md:w-[220px] h-[56px]">
                                <div className="relative flex items-center w-full h-full">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />

                                    <select
                                        className="w-full h-full pl-10 pr-4 bg-transparent border border-[#E5E7EB] rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#07595F] text-gray-700 cursor-pointer"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select City</option>
                                        <option value="cairo">Cairo</option>
                                        <option value="mansora">Mansora</option>
                                        <option value="alexandria">Alexandria</option>
                                        <option value="giza">Giza</option>
                                    </select>

                                    <div className="absolute right-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Search Button */}
                        <Button className="w-full h-[56px] text-base font-semibold bg-[#097178] hover:bg-[#07595F] text-white transition-colors rounded-[8px]">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
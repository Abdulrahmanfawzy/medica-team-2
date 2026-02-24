import { MapPin, Star, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface DoctorProps {
  name: string;
  specialty: string;
  rating: number;
  experience: number;
  location: string;
  imageUrl: string;
}

function DoctorCard({
  name,
  specialty,
  rating,
  experience,
  location,
  imageUrl,
}: DoctorProps) {
  return (
    <Card className="overflow-hidden mb-4 border-slate-200">
      <CardContent className="p-4 flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Doctor Image */}
        <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-teal-700">Dr. {name}</h3>
              <p className="text-slate-500 font-medium">{specialty}</p>
            </div>
            <div className="p-3 border border-slate-200 rounded-xl ">
              <Heart
                className="heart text-slate-400 cursor-pointer  hover:text-red-500 transition-colors"
                onClick={() => {}}
                size={24}
              />
            </div>
          </div>

          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.floor(rating) ? "currentColor" : "none"}
              />
            ))}
            <span className="text-slate-600 font-semibold ml-1">{rating}</span>
          </div>

          <div className="flex md:flex-row flex-col justify-between items-center gap-1 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} /> {location}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} /> {experience} years experience
            </div>
          </div>

          <Button className="bg-white hover:bg-white hover:text-teal-700 px-6 border border-teal-700 text-teal-700">
            Available Today
          </Button>

          {/* Actions */}
          <div className="flex flex-wrap gap-2 pt-4">
            <Button
              variant={"outline"}
              className="bg-white hover:bg-teal-700 hover:text-white px-6 border-teal-700 text-teal-700 cursor-pointer">
              <Link to="/booking">Book Appointment</Link>
            </Button>
            <Button
              variant="outline"
              className="bg-white hover:bg-teal-700 hover:text-white px-6 border-teal-700 text-teal-700 cursor-pointer">
              View Profile
            </Button>
            <Button
              variant="outline"
              className="bg-white hover:bg-teal-700 hover:text-white px-6 border-teal-700 text-teal-700  cursor-pointer">
              Message
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export default DoctorCard;

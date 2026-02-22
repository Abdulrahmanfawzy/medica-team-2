import React from "react";
import DoctorCard from "./CardFavorite";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const favorite = () => {
  const favoriteList = [
    {
      name: "Satya Nadella",
      specialty: "Cloud Computing & Enterprise Strategy",
      rating: 4.8,
      experience: 32,
      location: "Redmond, Washington",
      imageUrl: "https://imgur.com/kD2B9hP.jpg",
    },
    {
      name: "Sheryl Sandberg",
      specialty: "Digital Marketing & Operations",
      rating: 4.7,
      experience: 25,
      location: "Menlo Park, California",
      imageUrl: "https://imgur.com/G5YVt0E.jpg",
    },
    {
      name: "Elon Musk",
      specialty: "AI & Space Technology",
      rating: 4.5,
      experience: 28,
      location: "Austin, Texas",
      imageUrl: "https://imgur.com/JmQLfFc.jpg",
    },
    {
      name: "Susan Wojcicki",
      specialty: "Digital Media & Advertising",
      rating: 4.6,
      experience: 30,
      location: "San Bruno, California",
      imageUrl: "https://imgur.com/l8Hn9qM.jpg",
    },
    {
      name: "Tim Cook",
      specialty: "Supply Chain & Hardware Innovation",
      rating: 3.9,
      experience: 38,
      location: "Cupertino, California",
      imageUrl: "https://imgur.com/RmX7kPw.jpg",
    },
  ];
  return (
    <section>
      <div className="">
        <div className="">
          <h1 className="text-teal-600 text-xl font-bold ">Saved Doctors</h1>
          <p className="text-[#666666]">5 doctors in your favorites</p>
        </div>
        <div className="filter p-4 border border-slate-200 rounded-md my-5 grid md:grid-cols-5 grid-cols-2 gap-4">
          <Select>
            <SelectTrigger className="w-full border border-teal-600  text-md rounded-md px-3  outline-none  focus:bg-teal-600 focus:text-white  text-teal-600">
              <SelectValue
                className="focus:text-white text-teal-600"
                placeholder="Filter by Specialty"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full border border-teal-600  text-md rounded-md px-3  outline-none  focus:bg-teal-600 focus:text-white  text-teal-600">
              <SelectValue
                className="focus:text-white text-teal-600"
                placeholder="Filter by Location"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="md:col-span-2">
            <Select>
              <SelectTrigger className="md:w-[50%] w-full border border-teal-600  text-md rounded-md px-3  outline-none  focus:bg-teal-600 focus:text-white  text-teal-600">
                <SelectValue
                  className="focus:text-white text-teal-600"
                  placeholder="Availability"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Select>
            <SelectTrigger className=" w-full border border-black/50  text-md rounded-md px-3  outline-none ">
              <SelectValue placeholder="Sort by: Rating" className="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        {favoriteList.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            specialty={doctor.specialty}
            rating={doctor.rating}
            experience={doctor.experience}
            location={doctor.location}
            imageUrl={doctor.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default favorite;

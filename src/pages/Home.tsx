// assets
import home1 from "@/assets/images/home1.jpg";
import home2 from "@/assets/images/home2.jpg";
import home3 from "@/assets/images/home3.jpg";
import home4 from "@/assets/images/home4.jpg";
import home5 from "@/assets/images/home5.jpg";
import cars from "@/assets/images/cars.jpg";
import flight from "@/assets/images/flight.jpg";
import hotel from "@/assets/images/hotel.jpg";
import tours from "@/assets/images/tours.jpg";
import heroMobile from "@/assets/images/hero-mobile.jpg";
import { NavLink } from "react-router-dom";
import { Search, SlidersHorizontal, Star, MapPin } from "lucide-react";

const Home = () => {
  const categories = [
    { id: 1, name: "Flight", img: flight, path: "/flights" },
    { id: 2, name: "Cars", img: cars, path: "/cars" },
    { id: 3, name: "Tours", img: tours, path: "/tours" },
    { id: 4, name: "Hotel", img: hotel, path: "/hotels" },
  ];
  interface TourCard {
    id: number;
    title: string;
    location: string;
    rating: number;
    image: string;
    price?: number;
  }
  const recommendations: TourCard[] = [
    {
      id: 1,
      title: "The Pyramids",
      location: "Giza",
      rating: 4.5,
      image: home1,
      price: 100,
    },
    {
      id: 2,
      title: "The Citadel of Saladin",
      location: "Cairo",
      rating: 4.5,
      image: home2,
      price: 200,
    },
    {
      id: 3,
      title: "Karnak Temple",
      location: "Luxor",
      rating: 4.5,
      image: home3,
      price: 300,
    },
    {
      id: 4,
      title: "Library of Alexandria",
      location: "Alexandria",
      rating: 4.5,
      image: home4,
      price: 400,
    },
  ];
  const availableTours: TourCard[] = [
    {
      id: 1,
      title: "Luxor",
      location: "Giza",
      rating: 4.3,
      image: home1,
      price: 150,
    },
    {
      id: 2,
      title: "Dahab",
      location: "Cairo",
      rating: 4.5,
      image: home2,
      price: 250,
    },
    {
      id: 3,
      title: "Fayoum",
      location: "Luxor",
      rating: 4.2,
      image: home3,
      price: 200,
    },
    {
      id: 4,
      title: "Marsa Alam",
      location: "Alexandria",
      rating: 4.8,
      image: home4,
      price: 220,
    },
  ];
  return (
    <div className="home container mx-auto  mt-2 lg:p-12 p-4">
      <div className="hero flex justify-around items-center">
        <div className="hidden sm:flex">
          <div className="info flex flex-col gap-4 w-1/2 ">
            <div className="title ">
              <h1 className="text-6xl font-bold">
                Visit The Most
                <span className="text-[#1E429F]"> Beautiful Places</span> In The
                World
              </h1>
              <p className="text-gray-600 mt-4 w-[75%] text-xl">
                Explore stunning destinations around the globe. Find travel
                inspiration, top attractions, and plan your next adventure—all
                from one platform.
              </p>
            </div>
          </div>
          <div className="gallery flex gap-4 relative">
            <div className="group-one flex flex-col gap-4">
              <img
                src={home1}
                alt="home1"
                className="w-[231px] h-[251px] rounded-tl-[32px] object-cover"
              />
              <img
                src={home2}
                alt="home2"
                className="w-[231px] h-[251px] rounded-[16px] object-cover"
              />
            </div>
            <div className="group-two flex flex-col gap-4 justify-end">
              <img
                src={home3}
                alt="home3"
                className="w-[194px] h-[221px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] object-cover"
              />
              <img
                src={home4}
                alt="home4"
                className="w-[194px] h-[171px] rounded-br-[32px] rounded-[16px] object-cover"
              />
            </div>
            <div className="group-three flex flex-col justify-end">
              <img
                src={home5}
                alt="home5"
                className="w-[122px] h-[303px] rounded-tr-[40px] rounded-br-[40px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="hero-mobile flex justify-between items-center ">
          <div className="welcome">
            <h2 className="text-xl">Welcome</h2>
            <p className="text-[#9CA3AF]">explore The Best Places In World! </p>
          </div>
          <NavLink to="/profile" className="w-8 h-8 rounded-full bg-gray-200">
            <img src="" alt="" />
          </NavLink>
        </div>
        <form className="flex mt-6 max-w-full mx-auto space-x-2">
          <label htmlFor="simple-search" className=" sr-only">
            Search
          </label>
          <NavLink to="/search" className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3  pointer-events-none">
              <Search className="text-[#AFAFAF] cursor-pointer" />
            </div>
            <input
              type="text"
              id="simple-search"
              className=" px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium rounded ps-9 text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body"
              placeholder="Search branch name..."
              required
            />
          </NavLink>
          <NavLink
            to="/filters"
            className="inline-flex items-center justify-center shrink-0 border border-default-medium text-white bg-brand hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs rounded w-10 h-10 focus:outline-none"
          >
            <SlidersHorizontal className="text-[#AFAFAF] cursor-pointer" />
          </NavLink>
        </form>
        <div className="image mt-6">
          <img
            src={heroMobile}
            alt="heroMobile"
            className="h-full  max-h-[300px]  w-full rounded-[8px] object-cover"
          />
        </div>
      </div>
      <div className="section mt-4 mb-4">
        <section className="mt-8">
          <h2 className="text-2xl  text-[#111827] mb-6">Categories</h2>

          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <NavLink
                key={cat.id}
                to={cat.path}
                className="flex flex-col items-center min-w-[100px] group"
              >
                <div className="w-17 h-17 md:w-24 md:h-24 lg:w-35 lg:h-35 rounded-full overflow-hidden border-2 border-transparent shadow-sm">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <span className="mt-3 text-[#4169E1] font-bold text-lg md:text-xl">
                  {cat.name}
                </span>
              </NavLink>
            ))}
          </div>
        </section>
        <section className="mt-8 px-4 lg:px-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Recommendation</h2>
            <button className="text-[#4169E1] font-semibold text-sm">
              View all
            </button>
          </div>

          <div className="flex overflow-x-auto gap-4 no-scrollbar pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
            {recommendations.map((item) => (
              <div
                key={item.id}
                className="bg-white p-2 rounded-[24px] shadow-sm border border-gray-50 min-w-[180px] md:min-w-[220px] lg:min-w-0"
              >
                <img
                  src={item.image}
                  className="w-full aspect-square object-cover rounded-[20px] mb-3"
                  alt={item.title}
                />
                <div className="px-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-[14px] font-bold truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-[12px] font-bold">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <MapPin className="w-3 h-3 text-[#4169E1]" />
                    <span className="text-[12px]">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-10 px-4 mb-20 lg-mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#111827]">
              Available Tours
            </h2>
            <button className="text-[#4169E1] font-semibold text-sm">
              View all
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {availableTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white p-3 rounded-[24px] shadow-sm border border-gray-50 flex gap-4 items-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex-shrink-0">
                  <img
                    src={tour.image}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-[20px] object-cover"
                    alt={tour.title}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between h-full py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <p className="text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-wider">
                        Full Day Tour
                      </p>
                      <div className="flex items-center gap-1 bg-white shadow-sm px-2 py-0.5 rounded-full border border-gray-50">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-bold">{tour.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#111827] mt-1">
                      {tour.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    From{" "}
                    <span className="text-[#4169E1] font-extrabold text-lg">
                      ${tour.price}
                    </span>{" "}
                    Per Person
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

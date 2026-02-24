import { Users, X } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newMember } from "@/lib/schemas/booking.schema";
import { useBooking } from "@/lib/providers/BookingContext";
import { z } from "zod";
import { useState } from "react";
import Success from "./Success";

export default function AddMember({
  setAddMember,
}: {
  setAddMember: (value: boolean) => void;
}) {
  const [showSuccess, setShowSuccess] = useState(false);
  const { data: formData, addOtherPerson } = useBooking();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof newMember>>({
    resolver: zodResolver(newMember),
  });

  const onSubmit = (data: any) => {
    addOtherPerson(data);
    console.log(formData);
    setShowSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md p-4">
      <div className="flex flex-col gap-8 bg-white rounded-[24px] p-6 w-full max-w-[1140px] max-h-[90vh] overflow-y-auto shadow-2xl">
        {showSuccess ? (
          <Success
            setShowSuccess={setShowSuccess}
            setAddMember={setAddMember}
          />
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#b3b3b3] pb-4 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-3">
                <div
                  className="size-10 rounded-full flex items-center justify-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(9, 113, 120, 0.16) 0%, rgba(9, 113, 120, 0.16) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
                  }}
                >
                  <Users className="size-5" />
                </div>
                <p className=" font-medium text-base text-[#021618] tracking-[0.5px]">
                  Add Family Member
                </p>
              </div>
              <button
                className="cursor-pointer size-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(230, 230, 230, 0.72) 0%, rgba(230, 230, 230, 0.72) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
                }}
              >
                <span className="text-2xl" onClick={() => setAddMember(false)}>
                  <X />
                </span>
              </button>
            </div>

            {/* Form Fields */}
            <form
              id="member"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <Label
                  className={`text-sm text-[#333] tracking-[0.4px] uppercase ${errors.fullName ? "text-red-500" : ""}`}
                >
                  Full Name *
                </Label>
                <Input
                  {...register("fullName")}
                  type="text"
                  placeholder="Enter Full Name"
                  className={`w-full h-12 px-4 py-2 bg-white rounded-lg border border-[#b3b3b3]  font-medium text-sm text-[#111] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#097178]/20 ${errors.fullName && "ring-2 ring-red-500"}`}
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <Label
                  className={`text-sm text-[#333] tracking-[0.4px] uppercase ${errors.phoneNumber ? "text-red-500" : ""}`}
                >
                  Phone Number *
                </Label>
                <Input
                  {...register("phoneNumber")}
                  type="tel"
                  placeholder="Enter Phone Number"
                  className={`w-full h-12 px-4 py-2 bg-[#fcfcfc] rounded-lg border border-[#b3b3b3]  font-medium text-sm text-[#111] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#097178]/20 ${errors.phoneNumber && "ring-2 ring-red-500"}`}
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <Label
                  className={`text-sm text-[#333] tracking-[0.4px] uppercase ${errors.emailAddress ? "text-red-500" : ""}`}
                >
                  Email Address *
                </Label>
                <Input
                  {...register("emailAddress")}
                  type="email"
                  placeholder="Enter email address"
                  className={`w-full h-12 px-4 py-2 bg-[#fcfcfc] rounded-lg border border-[#b3b3b3]  font-medium text-sm text-[#111] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#097178]/20 ${errors.emailAddress && "ring-2 ring-red-500"}`}
                />
              </div>

              {/* Relationship to Patient */}
              <div className="flex flex-col gap-2">
                <Label
                  className={`text-sm text-[#333] tracking-[0.4px] uppercase ${errors.relation ? "text-red-500" : ""}`}
                >
                  Relationship to patient *
                </Label>
                <Input
                  {...register("relation")}
                  type="text"
                  placeholder="Enter your relationship to patient"
                  className={`w-full h-12 px-4 py-2 bg-[#fcfcfc] rounded-lg border border-[#b3b3b3]  font-medium text-sm text-[#111] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#097178]/20 ${errors.relation && "ring-2 ring-red-500"}`}
                />
              </div>
            </form>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse md:flex-row gap-4 pt-4">
              <button
                form="member"
                type="submit"
                className="cursor-pointer flex-1 h-12 py-2 md:h-14 bg-[#097178] text-[#fcfcfc] rounded-lg  font-semibold text-base transition-opacity hover:opacity-90"
              >
                Save
              </button>
              <button
                onClick={() => setAddMember(false)}
                className="cursor-pointer flex-1 h-12 py-2 md:h-14 bg-transparent text-[#097178] rounded-lg border border-[#097178]  font-semibold text-base transition-colors hover:bg-[#097178]/5"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

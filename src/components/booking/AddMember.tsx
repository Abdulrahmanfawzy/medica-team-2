import { Users, X, Check } from "lucide-react";
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
  const { addOtherPerson, setStep } = useBooking();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof newMember>>({
    resolver: zodResolver(newMember),
  });

  const onSubmit = (data: z.infer<typeof newMember>) => {
    addOtherPerson(data); 
    setStep(4);

    setShowSuccess(true);
  };

  const handleAddAnother = () => {
    reset();
    setShowSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md p-4">
      <div className="flex flex-col gap-8 bg-white rounded-[24px] p-6 w-full max-w-[1140px] max-h-[90vh] overflow-y-auto shadow-2xl relative">

        {showSuccess ? (
          <Success
            setShowSuccess={setShowSuccess}
            setAddMember={setAddMember}
            handleAddAnother={handleAddAnother}
          />
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#b3b3b3] pb-4 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full flex items-center justify-center bg-[#097178]/10">
                  <Users className="size-5 text-[#097178]" />
                </div>
                <p className="font-medium text-base text-[#021618] tracking-[0.5px]">
                  Add Family Member
                </p>
              </div>
              <button
                onClick={() => setAddMember(false)}
                className="cursor-pointer size-10 rounded-full flex items-center justify-center hover:bg-gray-100"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Form */}
            <form id="member" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label className={`text-sm tracking-[0.4px] uppercase ${errors.fullName ? "text-red-500" : "text-[#333]"}`}>
                  Full Name *
                </Label>
                <Input
                  {...register("fullName")}
                  placeholder="Enter Full Name"
                  className={`w-full h-12 border-[#b3b3b3] ${errors.fullName && "ring-2 ring-red-500"}`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className={`text-sm tracking-[0.4px] uppercase ${errors.phoneNumber ? "text-red-500" : "text-[#333]"}`}>
                  Phone Number *
                </Label>
                <Input
                  {...register("phoneNumber")}
                  placeholder="Enter Phone Number"
                  className={`w-full h-12 border-[#b3b3b3] ${errors.phoneNumber && "ring-2 ring-red-500"}`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className={`text-sm tracking-[0.4px] uppercase ${errors.emailAddress ? "text-red-500" : "text-[#333]"}`}>
                  Email Address *
                </Label>
                <Input
                  {...register("emailAddress")}
                  placeholder="Enter email address"
                  className={`w-full h-12 border-[#b3b3b3] ${errors.emailAddress && "ring-2 ring-red-500"}`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className={`text-sm tracking-[0.4px] uppercase ${errors.relation ? "text-red-500" : "text-[#333]"}`}>
                  Relationship to patient *
                </Label>
                <Input
                  {...register("relation")}
                  placeholder="Enter your relationship to patient"
                  className={`w-full h-12 border-[#b3b3b3] ${errors.relation && "ring-2 ring-red-500"}`}
                />
              </div>
            </form>

            {/* Buttons */}
            <div className="flex flex-col-reverse md:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={() => setAddMember(false)}
                className="flex-1 h-12 md:h-14 bg-transparent text-[#097178] rounded-lg border border-[#097178] font-semibold"
              >
                Cancel
              </button>
              <button
                form="member"
                type="submit"
                className="flex-1 h-12 md:h-14 bg-[#097178] text-white rounded-lg font-semibold hover:opacity-90"
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
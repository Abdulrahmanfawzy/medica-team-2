import { ChevronDown, Plus } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AddMember from "@/components/booking/AddMember";
import { useBooking } from "@/lib/providers/BookingProvider";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepC } from "@/lib/schemas/booking.schema";
import MySelf from "@/components/booking/MySelf";
import Others from "@/components/booking/Others";

export default function StepC() {
  const {
    register,
    formState: {},
  } = useForm<z.infer<typeof stepC>>({
    resolver: zodResolver(stepC),
    defaultValues: {
      for: "myself",
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      reasonForVisit: "",
    },
  });
  const [appointmentFor, setAppointmentFor] = useState<"myself" | "others">(
    "myself",
  );
  const { step, changeStep } = useBooking();
  const [phase, setPhase] = useState(1);
  const [addMember, setAddMember] = useState(false);

  const handleBack = () => {
    if (appointmentFor === "others" && phase === 2) {
      setPhase(1);
    } else {
      changeStep(step - 1);
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-[72px] size-full">
      {/* Main Form Container */}
      <div className="relative rounded-2xl border border-[#b3b3b3]">
        <div className="flex flex-col gap-10 px-6 py-8">
          {/* Appointment Type Section */}
          <div className="relative pb-0.5 border-b border-[#b3b3b3]">
            <p className="text-lg text-[#07595f] tracking-[0.4px] uppercase mb-4">
              This appointment is for:
            </p>
            <div className="flex gap-6 mb-[18px]">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  {...register("for")}
                  value="myself"
                  className="hidden peer"
                  onChange={(e) => {
                    register("for").onChange(e);
                    setAppointmentFor("myself");
                    setPhase(1);
                  }}
                  checked={appointmentFor === "myself"}
                />
                <div
                  className={`px-4 py-2.5 rounded-lg text-lg text-center transition-colors ${
                    appointmentFor === "myself"
                      ? "bg-[#097178] text-[#fcfcfc]"
                      : "bg-transparent text-[#097178] border border-[#097178]"
                  } w-[164px]`}
                >
                  My Self
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  {...register("for")}
                  value="others"
                  className="hidden peer"
                  onChange={(e) => {
                    register("for").onChange(e);
                    setAppointmentFor("others");
                    setPhase(1);
                  }}
                  checked={appointmentFor === "others"}
                />
                <div
                  className={`px-4 py-2.5 rounded-lg text-lg text-center transition-colors ${
                    appointmentFor === "others"
                      ? "bg-[#097178] text-[#fcfcfc]"
                      : "bg-transparent text-[#097178] border border-[#097178]"
                  } w-[138px]`}
                >
                  Others
                </div>
              </label>
            </div>
          </div>
          {appointmentFor === "myself" ? (
            //

            <MySelf />
          ) : (
            <Others setPhase={setPhase} phase={phase} />
          )}

          {/* Add Family Member Section */}
          {addMember && <AddMember setAddMember={setAddMember} />}
          <div className="relative pt-[34px] border-t border-[#b3b3b3]">
            <p className="text-base text-[#4a5565] mb-4">
              Save family member details for faster booking in the future
            </p>
            <button
              type="button"
              onClick={() => setAddMember(true)}
              className="bg-[#097178] text-[#fcfcfc] px-4 py-2.5 rounded-lg text-lg flex items-center gap-2 h-12 w-[290px]"
            >
              <Plus />
              ADD FAMILY MEMBER
            </button>
          </div>
        </div>
      </div>

      {/* Required Fields Note */}
      <div className="bg-[#fcfcfc] h-14 rounded-2xl border border-[#b3b3b3] flex items-center px-6 py-4">
        <p className="text-base text-[#333]">* All fields are required</p>
      </div>

      {/* Action Buttons */}

      {appointmentFor == "myself" && (
        <div className="flex justify-between h-14 gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="w-[188px] rounded-lg border border-[#097178] text-[#097178] text-lg px-4 py-2.5 cursor-pointer"
          >
            Back
          </button>

          <button
            type="submit"
            form="myself"
            className="w-[188px] rounded-lg bg-[#097178] text-[#fcfcfc] text-lg px-4 py-2.5 cursor-pointer"
          >
            Continue
          </button>
        </div>
      )}
      {appointmentFor == "others" && (
        <div className="flex justify-between h-14 gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="w-[188px] rounded-lg border border-[#097178] text-[#097178] text-lg px-4 py-2.5 cursor-pointer"
          >
            Back
          </button>

          {phase == 1 ? (
            <button
              type="submit"
              form="phase1"
              className="w-[188px] rounded-lg bg-[#097178] text-[#fcfcfc] text-lg px-4 py-2.5 cursor-pointer"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              form="phase2"
              className="w-[188px] rounded-lg bg-[#097178] text-[#fcfcfc] text-lg px-4 py-2.5 cursor-pointer"
            >
              Continue
            </button>
          )}
        </div>
      )}
    </div>
  );
}

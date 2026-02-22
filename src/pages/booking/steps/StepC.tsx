import { ChevronDown, Plus } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AddMember from "@/components/booking/AddMember";

export default function StepC({
  register,
  errors,
  handleNext,
  trigger,
  changeStep,
}: {
  register: any;
  errors: any;
  handleNext: () => void;
  trigger: any;
  changeStep: (step: number) => void;
}) {
  const [appointmentFor, setAppointmentFor] = useState<"myself" | "others">(
    "myself",
  );
  const [phase, setPhase] = useState(1);
  const [addMember, setAddMember] = useState(false);

  const handleNextPhase = async () => {
    if (appointmentFor === "others" && phase === 1) {
      const isValid = await trigger([
        "patientName",
        "gender",
        "dateOfBirth",
        "reasonForVisit",
      ]);
      if (isValid) setPhase(2);
    } else {
      handleNext();
    }
  };

  const handleBack = () => {
    if (appointmentFor === "others" && phase === 2) {
      setPhase(1);
    } else {
      changeStep(2);
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
            <>
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <Label className="text-lg text-[#333] tracking-[0.4px] uppercase">
                  Full Name *
                </Label>
                <Input
                  {...register("fullName")}
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base ${errors.fullName ? "border-red-500" : "border-[#b3b3b3] text-[#333]"}`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <Label className="text-lg text-[#333] tracking-[0.4px] uppercase">
                  Phone Number *
                </Label>
                <Input
                  {...register("phoneNumber")}
                  type="tel"
                  placeholder="Enter your Number"
                  className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base ${errors.phoneNumber ? "border-red-500" : "border-[#b3b3b3] text-[#333]"}`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <Label className="text-lg text-[#333] tracking-[0.4px] uppercase">
                  Email Address *
                </Label>
                <Input
                  {...register("emailAddress")}
                  type="email"
                  placeholder="Enter your Email"
                  className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base ${errors.emailAddress ? "border-red-500" : "border-[#b3b3b3] text-[#333]"}`}
                />
                {errors.emailAddress && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.emailAddress.message}
                  </p>
                )}
              </div>

              {/* Reason for Visit */}
              <div className="flex flex-col gap-2">
                <Label className="text-lg text-[#333] tracking-[0.4px] uppercase">
                  Reason for Visit *
                </Label>
                <Textarea
                  {...register("reasonForVisit")}
                  placeholder="[Briefly describe your symptoms or reason for consultation]"
                  className={`w-full h-[244px] px-4 py-2 bg-white rounded-lg border text-base resize-none ${errors.reasonForVisit ? "border-red-500" : "border-[#b3b3b3] text-[#333]"}`}
                />
                {errors.reasonForVisit && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.reasonForVisit.message}
                  </p>
                )}
              </div>
            </>
          ) : phase === 1 ? (
            <>
              {/* Patient Information */}
              <div className="flex flex-col gap-4">
                <p className="font-['Poppins:Medium',sans-serif] text-lg text-[#0a0a0a] tracking-[0.4px] uppercase">
                  Patient Information
                </p>

                {/* Patient Name */}
                <div className="flex flex-col gap-2">
                  <label className="font-['Poppins:Regular',sans-serif] text-lg text-[#333] tracking-[0.4px] uppercase">
                    Patient Name *
                  </label>
                  <input
                    {...register("patientName")}
                    type="text"
                    placeholder="Enter patient full name"
                    className={`w-full h-14 px-4 py-2 bg-white rounded-lg border font-['Poppins:Medium',sans-serif] text-base ${errors.patientName ? "border-red-500" : "border-[#b3b3b3] text-[#333]"}`}
                  />
                  {errors.patientName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.patientName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Gender Dropdown */}
              <div className="flex flex-col gap-2">
                <label className="font-['Poppins:Regular',sans-serif] text-lg text-[#333] tracking-[0.4px] uppercase">
                  Gender *
                </label>
                <div className="relative">
                  <select
                    {...register("gender")}
                    className={`w-full h-14 px-4 py-2 bg-[#fcfcfc] rounded-lg border font-['Poppins:Medium',sans-serif] text-base appearance-none ${errors.gender ? "border-red-500 text-red-500" : "border-[#4d4d4d] text-[#4d4d4d]"}`}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown />
                  </div>
                </div>
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col gap-2">
                <label className="font-['Poppins:Regular',sans-serif] text-lg text-[#333] tracking-[0.4px] uppercase">
                  Date of Birth *
                </label>
                <input
                  {...register("dateOfBirth")}
                  type="text"
                  placeholder="DD\MM\YYYY"
                  className={`w-full h-14 px-4 py-2 bg-white rounded-lg border font-['Poppins:Medium',sans-serif] text-base ${errors.dateOfBirth ? "border-red-500" : "border-[#b3b3b3] text-[#333]"}`}
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.dateOfBirth.message}
                  </p>
                )}
              </div>

              {/* Reason for Visit */}
              <div className="flex flex-col gap-2">
                <label className="font-['Poppins:Regular',sans-serif] text-lg text-[#333] tracking-[0.4px] uppercase">
                  Reason for Visit *
                </label>
                <textarea
                  {...register("reasonForVisit")}
                  placeholder="[Briefly describe your symptoms or reason for consultation]"
                  className={`w-full h-[244px] px-4 py-2 bg-white rounded-lg border font-['Poppins:Medium',sans-serif] text-base resize-none ${errors.reasonForVisit ? "border-red-500" : "border-[#b3b3b3] text-[#333]"}`}
                />
                {errors.reasonForVisit && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.reasonForVisit.message}
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <p className="font-['Poppins:Medium',sans-serif] text-lg text-[#0a0a0a] tracking-[0.4px] uppercase">
                Your Contact Information
              </p>
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <Label className="text-lg text-[#333] tracking-[0.4px] uppercase">
                  Your Full Name *
                </Label>
                <Input
                  {...register("fullName")}
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base ${errors.fullName ? "border-red-500" : "border-[#b3b3b3] text-[#333]"}`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <Label className="text-lg text-[#333] tracking-[0.4px] uppercase">
                  Phone Number *
                </Label>
                <Input
                  {...register("phoneNumber")}
                  type="tel"
                  placeholder="Enter your Number"
                  className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base ${errors.phoneNumber ? "border-red-500" : "border-[#b3b3b3] text-[#333]"}`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <Label className="text-lg text-[#333] tracking-[0.4px] uppercase">
                  Email Address *
                </Label>
                <Input
                  {...register("emailAddress")}
                  type="email"
                  placeholder="Enter your Email"
                  className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base ${errors.emailAddress ? "border-red-500" : "border-[#b3b3b3] text-[#333]"}`}
                />
                {errors.emailAddress && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.emailAddress.message}
                  </p>
                )}
              </div>
            </>
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
      <div className="flex justify-between h-14 gap-4">
        <button
          type="button"
          onClick={handleBack}
          className="w-[188px] rounded-lg border border-[#097178] text-[#097178] text-lg px-4 py-2.5 cursor-pointer"
        >
          Back
        </button>

        {phase === 1 ? (
          <button
            type="button"
            onClick={handleNextPhase}
            className="w-[188px] rounded-lg bg-[#097178] text-[#fcfcfc] text-lg px-4 py-2.5 cursor-pointer"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="w-[188px] rounded-lg bg-[#097178] text-[#fcfcfc] text-lg px-4 py-2.5 cursor-pointer"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

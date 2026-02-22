import { useState } from "react";
import { ChevronDown, Users, X } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function AddMember({
  setAddMember,
}: {
  setAddMember: (value: boolean) => void;
}) {
  const [relationship, setRelationship] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md p-4">
      <div className="flex flex-col gap-8 bg-white rounded-[24px] p-6 w-full max-w-[1140px] max-h-[90vh] overflow-y-auto shadow-2xl">
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
        <div className="flex flex-col gap-6">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <Label className=" text-sm text-[#333] tracking-[0.4px] uppercase">
              Full Name *
            </Label>
            <Input
              type="text"
              placeholder="Enter Full Name"
              className="w-full h-12 px-4 py-2 bg-white rounded-lg border border-[#b3b3b3]  font-medium text-sm text-[#111] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#097178]/20"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <Label className=" text-sm text-[#333] tracking-[0.4px] uppercase">
              Phone Number *
            </Label>
            <Input
              type="tel"
              placeholder="Enter Phone Number"
              className="w-full h-12 px-4 py-2 bg-[#fcfcfc] rounded-lg border border-[#b3b3b3]  font-medium text-sm text-[#111] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#097178]/20"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <Label className=" text-sm text-[#333] tracking-[0.4px] uppercase">
              Email Address *
            </Label>
            <Input
              type="email"
              placeholder="Enter email address"
              className="w-full h-12 px-4 py-2 bg-[#fcfcfc] rounded-lg border border-[#b3b3b3]  font-medium text-sm text-[#111] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#097178]/20"
            />
          </div>

          {/* Relationship to Patient */}
          <div className="flex flex-col gap-2">
            <Label className=" text-sm text-[#333] tracking-[0.4px] uppercase">
              Relationship to patient *
            </Label>
            <div className="relative">
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="w-full h-12 px-4 py-2  bg-white rounded-lg border border-[#bcbcbc]  font-medium text-sm text-[#111] appearance-none focus:outline-none focus:ring-2 focus:ring-[#097178]/20"
              >
                <option value="" disabled hidden>
                  Enter your Relationship to Patient
                </option>
                <option value="spouse">Spouse</option>
                <option value="parent">Parent</option>
                <option value="child">Child</option>
                <option value="sibling">Sibling</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="size-5 text-[#333]" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col-reverse md:flex-row gap-4 pt-4">
          <button
            onClick={() => setAddMember(false)}
            className="cursor-pointer flex-1 h-12 py-2 md:h-14 bg-transparent text-[#097178] rounded-lg border border-[#097178]  font-semibold text-base transition-colors hover:bg-[#097178]/5"
          >
            Cancel
          </button>
          <button
            onClick={() => console.log("Save")}
            className="cursor-pointer flex-1 h-12 py-2 md:h-14 bg-[#097178] text-[#fcfcfc] rounded-lg  font-semibold text-base transition-opacity hover:opacity-90"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

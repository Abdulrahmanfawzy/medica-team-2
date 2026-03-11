import { Plus } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AddMember from "@/components/booking/AddMember";
import { useSteps } from "@/lib/providers/StepsContext";
import MySelf from "@/components/booking/MySelf";
import Others from "@/components/booking/Others";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import { useBooking } from "@/lib/providers/BookingContext";

export default function StepC() {
  const [appointmentFor, setAppointmentFor] = useState<"myself" | "others">(
    "myself",
  );
  const { step, changeStep } = useSteps();
  const { data } = useBooking();
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
              <Label className="cursor-pointer">
                <Input
                  type="radio"
                  value="myself"
                  className="hidden peer"
                  onChange={(e) => {
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
              </Label>
              <Label className="cursor-pointer">
                <Input
                  type="radio"
                  value="others"
                  className="hidden peer"
                  onChange={(e) => {
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
              </Label>
            </div>
          </div>
          {appointmentFor === "myself" ? (
            <MySelf />
          ) : (
            <Others setPhase={setPhase} phase={phase} />
          )}

          {/* Show data of other user */}
          <div className="flex flex-col gap-1">
            {(data.patientInfo?.otherPerson || data.patientInfo?.mainPatient) &&
              [
                data.patientInfo.mainPatient,
                ...(data.patientInfo.otherPerson || []),
              ].map((person, index) => (
                <CardContent
                  key={index}
                  className="px-0 border-t border-[#b3b3b3] bg-[#fcfcfc] shadow-md rounded-md py-2"
                >
                  <Collapsible className="data-open:bg-muted rounded-md">
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full flex items-center justify-between"
                      >
                        {person?.fullName || "Unnamed Member"}
                        <ChevronDownIcon className="transition-transform duration-200 data-[state=open]:rotate-180" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="flex flex-col gap-2 p-4 pt-0 text-sm border-t border-gray-100 mt-2">
                      {person?.gender && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Gender:</span>
                          <span className="font-medium">{person.gender}</span>
                        </div>
                      )}
                      {person?.dateOfBirth && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Date of Birth:</span>
                          <span className="font-medium">
                            {person.dateOfBirth}
                          </span>
                        </div>
                      )}
                      {person?.relation && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Relation:</span>
                          <span className="font-medium">{person.relation}</span>
                        </div>
                      )}
                      {person?.reasonForVisit && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">
                            Reason for visit:
                          </span>
                          <span className="font-medium">
                            {person.reasonForVisit}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between pt-2 border-t border-dashed">
                        <span className="text-gray-500">Appointment:</span>
                        <span className="font-medium text-[#097178]">
                          {data.appointment?.date || "No date"} at{" "}
                          {data.appointment?.time || "No time"}
                        </span>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              ))}
          </div>

          {/* Add Family Member Section */}
          {addMember && <AddMember setAddMember={setAddMember} />}
          <div className="relative pt-[34px] border-t border-[#b3b3b3]">
            <p className="text-base text-[#4a5565] mb-4">
              Save family member details for faster booking in the future
            </p>
            {(appointmentFor === "myself" || phase === 2) && (
              <button
                type="button"
                onClick={() => setAddMember(true)}
                className="cursor-pointer bg-[#097178] text-[#fcfcfc] px-4 py-2.5 rounded-lg text-lg flex items-center gap-2 h-12 w-[290px]"
              >
                <Plus />
                ADD FAMILY MEMBER
              </button>
            )}
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

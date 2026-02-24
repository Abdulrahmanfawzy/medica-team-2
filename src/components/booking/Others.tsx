import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { othersPhase1, othersPhase2 } from "@/lib/schemas/booking.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronDown } from "lucide-react";
import { useBooking } from "@/lib/providers/BookingContext";
import { useSteps } from "@/lib/providers/StepsContext";

export default function Others({
  setPhase,
  phase,
}: {
  setPhase: (phase: number) => void;
  phase: number;
}) {
  return <>{phase === 1 ? <Phase1 setPhase={setPhase} /> : <Phase2 />}</>;
}

function Phase1({ setPhase }: { setPhase: (phase: number) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof othersPhase1>>({
    resolver: zodResolver(othersPhase1),
    defaultValues: {
      fullName: "",
      gender: "",
      dateOfBirth: "",
      reasonForVisit: "",
    },
  });

  const { data: formData, updateForm } = useBooking();

  const onSubmit = (data: z.infer<typeof othersPhase1>) => {
    setPhase(2);
    const payload = {
      ...formData,
      patientInfo: {
        ...formData.patientInfo,
        mainPatient: {
          fullName: data.fullName,
          gender: data.gender,
          dateOfBirth: data.dateOfBirth,
          reasonForVisit: data.reasonForVisit,
        },
      },
    };

    updateForm(payload);
  };
  return (
    <form
      id="phase1"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4">
        <p className="font-['Poppins:Medium',sans-serif] text-lg text-[#0a0a0a] tracking-[0.4px] uppercase">
          Patient Information
        </p>

        <div className="flex flex-col gap-2">
          <Label
            className={`font-['Poppins:Regular',sans-serif] text-lg text-[#333] tracking-[0.4px] uppercase ${errors.fullName ? "text-red-500" : ""}`}
          >
            Full Name *
          </Label>
          <Input
            {...register("fullName")}
            type="text"
            placeholder="Enter your fullname"
            className={`w-full h-14 px-4 py-2 bg-white rounded-lg border font-['Poppins:Medium',sans-serif] text-base ${errors.fullName ? "ring-2 ring-[#ff000070]" : ""}`}
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label
          className={`font-['Poppins:Regular',sans-serif] text-lg text-[#333] tracking-[0.4px] uppercase ${errors.gender ? "text-red-500" : ""}`}
        >
          Gender *
        </Label>

        <div className="relative">
          <select
            {...register("gender")}
            className={`w-full h-14 px-4 py-2 bg-[#fcfcfc] rounded-lg border font-['Poppins:Medium',sans-serif] text-base appearance-none ${errors.gender ? "ring-2 ring-[#ff000070]" : ""}`}
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDown />
          </div>
        </div>
        {errors.gender && (
          <p className="text-red-500">{errors.gender.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label
          className={`font-['Poppins:Regular',sans-serif] text-lg text-[#333] tracking-[0.4px] uppercase ${errors.dateOfBirth ? "text-red-500" : ""}`}
        >
          Date of Birth *
        </Label>
        <Input
          {...register("dateOfBirth")}
          type="date"
          placeholder="DD\MM\YYYY"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border font-['Poppins:Medium',sans-serif] text-base ${errors.dateOfBirth ? "ring-2 ring-[#ff000070]" : ""}`}
        />
        {errors.dateOfBirth && (
          <p className="text-red-500">{errors.dateOfBirth.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label
          className={`font-['Poppins:Regular',sans-serif] text-lg text-[#333] tracking-[0.4px] uppercase ${errors.reasonForVisit ? "text-red-500" : ""}`}
        >
          Reason for Visit *
        </Label>
        <Textarea
          {...register("reasonForVisit")}
          placeholder="[Briefly describe your symptoms or reason for consultation]"
          className={`w-full h-[244px] px-4 py-2 bg-white rounded-lg border font-['Poppins:Medium',sans-serif] text-base resize-none ${errors.reasonForVisit ? "ring-2 ring-[#ff000070]" : ""}`}
        />
        {errors.reasonForVisit && (
          <p className="text-red-500">{errors.reasonForVisit.message}</p>
        )}
      </div>
    </form>
  );
}

function Phase2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof othersPhase2>>({
    resolver: zodResolver(othersPhase2),
    defaultValues: {
      phoneNumber: "",
      emailAddress: "",
      relation: "",
    },
  });

  const { changeStep } = useSteps();
  const { data: formData, updateForm } = useBooking();

  const phase1Submit = (data: z.infer<typeof othersPhase2>) => {
    const payload = {
      ...formData,
      patientInfo: {
        ...formData.patientInfo,
        mainPatient: {
          ...formData.patientInfo?.mainPatient,
          phoneNumber: data.phoneNumber,
          emailAddress: data.emailAddress,
          relation: data.relation,
        },
      },
    };

    changeStep(4);

    console.log("This data come from phase 1 payload", payload);
    console.log("This data come from phase 1 formData", formData);

    updateForm(payload);
  };

  return (
    <form
      id="phase2"
      onSubmit={handleSubmit(phase1Submit)}
      className="flex flex-col gap-4"
    >
      <p className="text-lg text-[#0a0a0a] tracking-[0.4px] uppercase">
        Contact Person Information
      </p>
      <div className="flex flex-col gap-2">
        <Label
          className={`text-lg text-[#333] tracking-[0.4px] uppercase ${errors.fullName ? "text-red-500" : ""}`}
        >
          Your Full Name *
        </Label>
        <Input
          {...register("fullName")}
          type="text"
          placeholder="Enter your fullname"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base ${errors.fullName ? "ring-2 ring-[#ff000070]" : ""}`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label
          className={`text-lg text-[#333] tracking-[0.4px] uppercase ${errors.phoneNumber ? "text-red-500" : ""}`}
        >
          Phone Number *
        </Label>
        <Input
          {...register("phoneNumber")}
          type="tel"
          placeholder="Enter your Number"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base ${errors.phoneNumber ? "ring-2 ring-[#ff000070]" : ""}`}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label
          className={`text-lg text-[#333] tracking-[0.4px] uppercase ${errors.emailAddress ? "text-red-500" : ""}`}
        >
          Email Address *
        </Label>
        <Input
          {...register("emailAddress")}
          type="email"
          placeholder="Enter your Email"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base ${errors.emailAddress ? "ring-2 ring-[#ff000070]" : ""}`}
        />
        {errors.emailAddress && (
          <p className="text-red-500 text-sm">{errors.emailAddress.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label
          className={`text-lg text-[#333] tracking-[0.4px] uppercase ${errors.relation ? "text-red-500" : ""}`}
        >
          Relation *
        </Label>
        <Input
          {...register("relation")}
          type="text"
          placeholder="Enter your Relationship to patient"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base ${errors.relation ? "ring-2 ring-[#ff000070]" : ""}`}
        />
        {errors.relation && (
          <p className="text-red-500 text-sm">{errors.relation.message}</p>
        )}
      </div>
    </form>
  );
}

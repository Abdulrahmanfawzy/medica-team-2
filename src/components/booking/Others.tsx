import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import { stepC } from "@/lib/schemas/booking.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
  } = useForm<z.infer<typeof stepC>>({
    resolver: zodResolver(stepC),
    defaultValues: {
      for: "others",
      details: {
        phase: 1,
        fullName: "",
        gender: "male",
        dateOfBirth: "",
        reasonForVisit: "",
      },
    },
  });

  const onSubmit = (data: z.infer<typeof stepC>) => {
    console.log(data);
    setPhase(2);
  };

  return (
    <form
      id="phase1"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      {/* Patient Information */}
      <div className="flex flex-col gap-4">
        <p className="font-['Poppins:Medium',sans-serif] text-lg text-[#0a0a0a] tracking-[0.4px] uppercase">
          Patient Information
        </p>

        {/* Patient Name */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Regular',sans-serif] text-lg text-[#333] tracking-[0.4px] uppercase">
            Full Name *
          </label>
          <input
            {...register("details.fullName")}
            type="text"
            placeholder="Enter your fullname"
            className={`w-full h-14 px-4 py-2 bg-white rounded-lg border font-['Poppins:Medium',sans-serif] text-base`}
          />
        </div>
      </div>

      {/* Gender Dropdown */}
      <div className="flex flex-col gap-2">
        <label className="font-['Poppins:Regular',sans-serif] text-lg text-[#333] tracking-[0.4px] uppercase">
          Gender *
        </label>
        <div className="relative">
          <select
            {...register("details.gender")}
            className={`w-full h-14 px-4 py-2 bg-[#fcfcfc] rounded-lg border font-['Poppins:Medium',sans-serif] text-base appearance-none`}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDown />
          </div>
        </div>
      </div>

      {/* Date of Birth */}
      <div className="flex flex-col gap-2">
        <label className="font-['Poppins:Regular',sans-serif] text-lg text-[#333] tracking-[0.4px] uppercase">
          Date of Birth *
        </label>
        <input
          {...register("details.dateOfBirth")}
          type="text"
          placeholder="DD\MM\YYYY"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border font-['Poppins:Medium',sans-serif] text-base`}
        />
      </div>

      {/* Reason for Visit */}
      <div className="flex flex-col gap-2">
        <label className="font-['Poppins:Regular',sans-serif] text-lg text-[#333] tracking-[0.4px] uppercase">
          Reason for Visit *
        </label>
        <textarea
          {...register("details.reasonForVisit")}
          placeholder="[Briefly describe your symptoms or reason for consultation]"
          className={`w-full h-[244px] px-4 py-2 bg-white rounded-lg border font-['Poppins:Medium',sans-serif] text-base resize-none`}
        />
      </div>
    </form>
  );
}

function Phase2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof stepC>>({
    resolver: zodResolver(stepC),
    defaultValues: {
      for: "others",
      details: {
        phase: 2,
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        relation: "",
      },
    },
  });

  const onSubmit = (data: z.infer<typeof stepC>) => {
    console.log(data);
    console.log(errors);
  };
  console.log(errors);

  return (
    <form
      id="phase2"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <p className="font-['Poppins:Medium',sans-serif] text-lg text-[#0a0a0a] tracking-[0.4px] uppercase">
        Contact Person Information
      </p>
      {/* Full Name */}
      <div className="flex flex-col gap-2">
        <Label className="text-lg text-[#333] tracking-[0.4px] uppercase">
          Your Full Name *
        </Label>
        <Input
          {...register("details.fullName")}
          type="text"
          placeholder="Enter your fullname"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base`}
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <Label className="text-lg text-[#333] tracking-[0.4px] uppercase">
          Phone Number *
        </Label>
        <Input
          {...register("details.phoneNumber")}
          type="tel"
          placeholder="Enter your Number"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base`}
        />
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-2">
        <Label className="text-lg text-[#333] tracking-[0.4px] uppercase">
          Email Address *
        </Label>
        <Input
          {...register("details.emailAddress")}
          type="email"
          placeholder="Enter your Email"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base`}
        />
      </div>

      {/* Relation */}
      <div className="flex flex-col gap-2">
        <Label className="text-lg text-[#333] tracking-[0.4px] uppercase">
          Relation *
        </Label>
        <Input
          {...register("details.relation")}
          type="text"
          placeholder="Enter your Relationship to patient"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base`}
        />
      </div>
    </form>
  );
}

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { stepC } from "@/lib/schemas/booking.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function MySelf() {
  const {
    register,
    handleSubmit,
    formState: { errors },
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

  const onSubmit = (data: z.infer<typeof stepC>) => {
    console.log(data);
    console.log(errors);
};

  return (
    <form
      id="myself"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      {/* Full Name */}
      <div className="flex flex-col gap-2">
        <Label className="text-lg text-[#333] tracking-[0.4px] uppercase">
          Full Name *
        </Label>
        <Input
          {...register("fullName")}
          type="text"
          placeholder="Enter your full name"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base`}
        />
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
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base`}
        />
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
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base`}
        />
      </div>

      {/* Reason for Visit */}
      <div className="flex flex-col gap-2">
        <Label className="text-lg text-[#333] tracking-[0.4px] uppercase">
          Reason for Visit *
        </Label>
        <Textarea
          {...register("reasonForVisit")}
          placeholder="[Briefly describe your symptoms or reason for consultation]"
          className={`w-full h-[244px] px-4 py-2 bg-white rounded-lg border text-base resize-none`}
        />
      </div>
    </form>
  );
}

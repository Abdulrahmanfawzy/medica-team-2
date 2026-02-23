import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { myselfSchema } from "@/lib/schemas/booking.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function MySelf() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof myselfSchema>>({
    resolver: zodResolver(myselfSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      reasonForVisit: "",
    },
  });

  const onSubmit = (data: z.infer<typeof myselfSchema>) => {
    console.log(data);
    console.log(errors);
  };
  console.log(errors);

  return (
    <form
      id="myself"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      {/* Full Name */}
      <div className="flex flex-col gap-2">
        <Label
          className={`text-lg text-[#333] tracking-[0.4px] uppercase ${errors.fullName && "text-red-500"}`}
        >
          Full Name *
        </Label>
        <Input
          {...register("fullName")}
          type="text"
          placeholder="Enter your full name"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base ${errors.fullName && "ring-2 ring-red-500"}`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <Label
          className={`text-lg text-[#333] tracking-[0.4px] uppercase ${errors.phoneNumber && "text-red-500"}`}
        >
          Phone Number *
        </Label>
        <Input
          {...register("phoneNumber")}
          type="tel"
          placeholder="Enter your Number"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base ${errors.phoneNumber && "ring-2 ring-red-500"}`}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-2">
        <Label
          className={`text-lg text-[#333] tracking-[0.4px] uppercase ${errors.emailAddress && "text-red-500"}`}
        >
          Email Address *
        </Label>
        <Input
          {...register("emailAddress")}
          type="email"
          placeholder="Enter your Email"
          className={`w-full h-14 px-4 py-2 bg-white rounded-lg border text-base ${errors.emailAddress && "ring-2 ring-red-500"}`}
        />
        {errors.emailAddress && (
          <p className="text-red-500 text-sm">{errors.emailAddress.message}</p>
        )}
      </div>

      {/* Reason for Visit */}
      <div className="flex flex-col gap-2">
        <Label
          className={`text-lg text-[#333] tracking-[0.4px] uppercase ${errors.reasonForVisit && "text-red-500"}`}
        >
          Reason for Visit *
        </Label>
        <Textarea
          {...register("reasonForVisit")}
          placeholder="[Briefly describe your symptoms or reason for consultation]"
          className={`w-full h-[244px] px-4 py-2 bg-white rounded-lg border text-base resize-none ${errors.reasonForVisit && "ring-2 ring-red-500"}`}
        />
        {errors.reasonForVisit && (
          <p className="text-red-500 text-sm">
            {errors.reasonForVisit.message}
          </p>
        )}
      </div>
    </form>
  );
}

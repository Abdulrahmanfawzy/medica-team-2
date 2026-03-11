import { Building2, Check, Video } from "lucide-react";
import imgDoctor from "@/assets/doctor1.jpg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepA } from "@/lib/schemas/booking.schema";
import type z from "zod";
import { useSteps } from "@/lib/providers/StepsContext";
import { useBooking } from "@/lib/providers/BookingContext";

export default function StepA() {
  const { step, changeStep } = useSteps();
  const { data, updateForm } = useBooking();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepA),
  });

  const visitTypes = [
    {
      icon: <Building2 strokeWidth={1} size={50} color="#333" />,
      title: "Clinic Visit",
      value: "clinic",
      description:
        "Visit the doctor at their clinic for an in-person consultation",
      features: [
        "Physical examination",
        "Lab tests available",
        "Diagnostic equipment",
      ],
      fee: "$150",
    },
    {
      icon: <Video strokeWidth={1} size={50} color="#333" />,
      title: "Online Consultation",
      value: "online",
      description: "Consult with the doctor from anywhere via video call",
      features: [
        "Video consultation",
        "Digital prescription",
        "No travel required",
      ],
      fee: "$100",
    },
  ];

  const onSubmit = (data: z.infer<typeof stepA>) => {
    updateForm({ visitType: data.visitType });
    changeStep(step + 1);
  };

  return (
    <>
      <div className="flex gap-6 items-center bg-[#FCFCFC] border border-[#B3B3B3] rounded-[16px] p-[16px]">
        <div className="w-[160px] h-[162px] rounded-[16px] overflow-hidden shrink-0">
          <img
            src={imgDoctor}
            alt="Dr. Sarah Ahmed"
            className="w-full h-full object-cover object-right"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-[24px] text-[#097178]">
            Dr. Sarah Ahmed
          </h2>
          <p className="font-normal text-[16px] text-[#202020]">
            Dermatologist
          </p>
        </div>
      </div>

      <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-6">
          {visitTypes.map((visit) => (
            <label
              key={visit.title}
              className={`cursor-pointer w-full max-w-[506px]`}
            >
              {/* radio input */}
              <input
                {...register("visitType")}
                type="radio"
                name="visitType"
                value={visit.value}
                className="hidden peer"
                defaultChecked={visit.value === data?.visitType}
              />

              {/* card */}
              <div
                className={`flex flex-col gap-6 items-center p-8 rounded-2xl border border-[#b3b3b3] transition-colors
        peer-checked:border-[#097178] peer-checked:bg-[#097178]/15 hover:border-[#097178] ${errors.visitType && "outline-4 outline-[#ff000070]"}`}
              >
                <div className="w-[116px] h-[116px] rounded-full border-2 border-[#333] flex items-center justify-center">
                  {visit.icon}
                </div>

                <p className="text-[16px] text-[#07595f] font-medium">
                  {visit.title}
                </p>

                <p className="text-[16px] text-[#666] text-center font-normal">
                  {visit.description}
                </p>

                <div className="flex flex-col gap-2 w-full">
                  {visit.features.map((feature) => (
                    <div key={feature} className="flex gap-2 items-center">
                      <Check size={20} color="#4D4D4D" />
                      <p className="text-[16px] text-[#4d4d4d]">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="w-full pt-6 border-t border-[#b3b3b3]">
                  <p className="text-[16px] text-[#202020] text-center uppercase font-medium">
                    Consultation Fee: {visit.fee}
                  </p>
                </div>
              </div>
            </label>
          ))}
        </div>

        <p className="note py-4 px-6 bg-[#FCFCFC] border border-[#b3b3b3] rounded-[16px] text-[16px] font-normal">
          <span className="text-[#333333] uppercase">Note: </span>
          <span className="text-[#333333]">
            You can change your visit type before confirming the booking.
          </span>
        </p>
        <div className="flex justify-end">
          <button
            type="submit"
            className="cursor-pointer w-[188px] h-[56px] mb-[72px] px-[16px] py-[10px] font-semibold text-[18px] bg-[#07595f] text-[#fcfcfc] rounded-[8px]"
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
}

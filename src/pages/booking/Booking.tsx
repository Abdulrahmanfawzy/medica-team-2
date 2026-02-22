import StepsBar from "../../components/booking/StepsBar";
import Back from "../../components/common/Back";
import Container from "../../components/layout/Container";
import Header from "../../components/booking/Header";
import StepA from "./steps/StepA";
import StepB from "./steps/StepB";
import StepC from "./steps/StepC";
import { useBooking } from "../../lib/providers/BookingProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepA, stepB, stepC } from "../../lib/schemas/booking.schema";

export default function Booking() {
  const { step, currentStep, changeStep } = useBooking();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(step === 1 ? stepA : step === 2 ? stepB : stepC),
  });

  const stepAFields = ["visitType"] as const;
  const stepBFields = ["date", "time"] as const;
  const stepCFields = [
    "for",
    "fullName",
    "phoneNumber",
    "emailAddress",
    "reasonForVisit",
    "patientName",
    "gender",
    "dateOfBirth",
    "relation",
  ] as any;

  const handleNextA = async (data: any) => {
    const isValid = await trigger(stepAFields);
    if (!isValid) return;
    console.log(data);
    changeStep(step + 1);
  };

  const handleNextB = async (data: any) => {
    const isValid = await trigger(stepBFields);
    if (!isValid) return;
    console.log(data);
    changeStep(step + 1);
  };

  const handleNextC = async (data: any) => {
    const isValid = await trigger(stepCFields);
    if (!isValid) return;
    console.log(data);
    changeStep(step + 1);
  };

  console.log(errors);

  const submit = (data: any) => {
    console.log("FINAL BOOKING DATA:", data);
  };

  return (
    <Container className="flex flex-col">
      <StepsBar />
      <div className="step-1 flex flex-col gap-6">
        <div className="flex flex-col justify-between items-start gap-6">
          <Back />
          <Header
            step={step.toString()}
            title={currentStep?.title}
            description={currentStep?.description}
          />
        </div>
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-8">
          {step === 1 && (
            <StepA
              register={register}
              errors={errors}
              handleNext={handleNextA}
            />
          )}
          {step === 2 && (
            <StepB
              register={register}
              errors={errors}
              handleNext={handleNextB}
            />
          )}
          {step === 3 && (
            <StepC
              register={register}
              errors={errors}
              handleNext={handleNextC}
              trigger={trigger}
              changeStep={changeStep}
            />
          )}
        </form>
      </div>
    </Container>
  );
}

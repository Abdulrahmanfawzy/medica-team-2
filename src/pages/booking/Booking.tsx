import StepsBar from "../../components/booking/StepsBar";
import Back from "../../components/common/Back";
import Container from "../../components/layout/Container";
import Header from "../../components/booking/Header";
import StepA from "./steps/StepA";
import StepB from "./steps/StepB";
import StepC from "./steps/StepC";
import { useBooking } from "../../lib/providers/BookingProvider";

export default function Booking() {
  const { step, currentStep } = useBooking();

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
        <div className="flex flex-col gap-8">
          {step === 1 && <StepA />}
          {step === 2 && <StepB />}
          {step === 3 && <StepC />}
        </div>
      </div>
    </Container>
  );
}

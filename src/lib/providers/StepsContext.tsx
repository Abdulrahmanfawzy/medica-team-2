import { createContext, useContext, useState } from "react";

type Step = {
  number: number;
  label: string;
  title: string;
  description: string;
  active: boolean;
};

const initialSteps: Step[] = [
  {
    number: 1,
    label: "Visit Type",
    title: "Choose Visit Type",
    description: "Select how you would like to consult with the doctor",
    active: true,
  },
  {
    number: 2,
    label: "Date & Time",
    title: "Select Date & Time",
    description: "Choose your preferred appointment date and time slot",
    active: false,
  },
  {
    number: 3,
    label: "Patient Info",
    title: "Patient Information",
    description: "Enter patient details for the appointment",
    active: false,
  },
  {
    number: 4,
    label: "Payment",
    title: "Payment",
    description: "Choose your preferred payment method",
    active: false,
  },
];

type StepsContextType = {
  step: number;
  steps: Step[];
  changeStep: (newStep: number) => void;
  currentStep: Step | undefined;
  bookingData: {
    visitType: string;
    dateTime: string;
    patientId: string;
    paymentMethod: string;
  };
  setBookingData: React.Dispatch<React.SetStateAction<{
    visitType: string;
    dateTime: string;
    patientId: string;
    paymentMethod: string;
  }>>;
};

const StepsContext = createContext<StepsContextType | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(1);
  const [steps, setSteps] = useState(initialSteps);
  
  const [bookingData, setBookingData] = useState({
    visitType: "",
    dateTime: "",
    patientId: "",
    paymentMethod: "online",
  });

  const changeStep = (newStep: number) => {
    setStep(newStep);
    const updated = steps.map((s) => ({
      ...s,
      active: s.number <= newStep,
    }));
    setSteps(updated);
  };

  const currentStep = steps.find((s) => s.number === step);

  return (
    <StepsContext.Provider
      value={{
        step,
        steps,
        changeStep,
        currentStep,
        bookingData,
        setBookingData, 
      }}
    >
      {children}
    </StepsContext.Provider>
  );
}

export const useSteps = () => {
  const context = useContext(StepsContext);
  if (!context) {
    throw new Error("useSteps must be used within a StepsProvider");
  }
  return context;
};

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

const BookingContext = createContext<any>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(1);
  const [steps, setSteps] = useState(initialSteps);

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
    <BookingContext.Provider value={{ step, steps, changeStep, currentStep }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);

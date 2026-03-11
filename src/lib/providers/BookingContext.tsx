import { createContext, useContext, useState, type ReactNode } from "react";

type OtherPerson = {
  fullName: string;
  emailAddress: string;
  gender: string;
  dateOfBirth: string;
  phoneNumber: string;
  reasonForVisit: string;
  relation: string;
};

type FormData = {
  visitType?: "online" | "clinic";
  appointment?: Partial<{
    date: string;
    time: string;
  }>;
  patientInfo?: {
    mySelf?: Partial<{
      fullName: string;
      emailAddress: string;
      phoneNumber: string;
      reasonForVisit: string;
    }>;
    mainPatient?: Partial<OtherPerson>;
    otherPerson?: Partial<OtherPerson>[];
  };
};

type FormContextType = {
  data: Partial<FormData>;
  step: number;
  setStep: (step: number) => void;
  updateForm: (values: Partial<FormData>) => void;
  addOtherPerson: (person: Partial<OtherPerson>) => void;
  removeOtherPerson: (index: number) => void;
  resetForm: () => void;
};

const FormContext = createContext<FormContextType | null>(null);

export function FormProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Partial<FormData>>({});
  const [step, setStep] = useState(1);

  const updateForm = (values: Partial<FormData>) => {
    setData((prev) => ({
      ...prev,
      ...values,
      appointment: {
        ...prev.appointment,
        ...values.appointment,
      },
      patientInfo: {
        ...prev.patientInfo,
        ...values.patientInfo,
        mySelf: {
          ...prev.patientInfo?.mySelf,
          ...values.patientInfo?.mySelf,
        },
      },
    }));
  };

  const addOtherPerson = (person: Partial<OtherPerson>) => {
    setData((prev) => ({
      ...prev,
      patientInfo: {
        ...prev.patientInfo,
        otherPerson: [...(prev.patientInfo?.otherPerson ?? []), person],
      },
    }));
  };

  const removeOtherPerson = (index: number) => {
    setData((prev) => ({
      ...prev,
      patientInfo: {
        ...prev.patientInfo,
        otherPerson: prev.patientInfo?.otherPerson?.filter(
          (_, i) => i !== index,
        ),
      },
    }));
  };

  const resetForm = () => {
    setData({});
    setStep(1);
  };

  return (
    <FormContext.Provider
      value={{
        data,
        step,
        setStep,
        updateForm,
        addOtherPerson,
        removeOtherPerson,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useBooking must be used inside FormProvider");
  }
  return context;
}
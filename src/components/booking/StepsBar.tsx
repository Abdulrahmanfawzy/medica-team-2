import { useSteps } from "../../lib/providers/StepsContext";

export default function StepsBar() {
  const { steps } = useSteps();
  return (
    <div className="flex items-start self-center justify-between lg:w-[824px] w-full p-8">
      {steps.map(
        (
          step: { number: number; label: string; active: boolean },
          index: number,
        ) => (
          <div
            key={step.number}
            className={`flex items-center ${index < steps.length - 1 ? "flex-1" : ""}`}
          >
            {/* Step Circle and Label */}
            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step.active
                    ? "bg-[#097178] border-[#097178] text-[#fcfcfc]"
                    : "border-[#b3b3b3] text-[#b3b3b3]"
                }`}
              >
                <span className="font-['Poppins:Regular',sans-serif] text-[14px]">
                  {step.number}
                </span>
              </div>
              <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#4d4d4d] text-center">
                {step.label}
              </p>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] ${step.active ? "bg-[#097178]" : "bg-[#b3b3b3]"}`}
              />
            )}
          </div>
        ),
      )}
    </div>
  );
}

import { CircleCheckBig, UserRoundPlus } from "lucide-react";

export default function Success({
  setShowSuccess,
  setAddMember,
  handleAddAnother,
}: {
  setShowSuccess: (showSuccess: boolean) => void;
  setAddMember: (addMember: boolean) => void;
  handleAddAnother: () => void;
}) {
  return (
    <div className="flex flex-col gap-[124px] items-center justify-center min-h-[600px]">
      {/* Success Icon and Message */}
      <div className="flex flex-col gap-6 items-center">
        {/* Green Circle with Checkmark */}
        <div className="bg-[#34a853] rounded-full w-[223px] h-[223px] flex items-center justify-center p-8">
          <CircleCheckBig size={150} color="white" />
        </div>

        {/* Success Text */}
        <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] leading-[24px] text-[#07595f] text-center">
          Member added successfully!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 w-full flex-wrap">
        <button
          onClick={() => {
            setShowSuccess(false);
            setAddMember(true);
          }}
          className="flex-1 min-w-[260px] cursor-pointer bg-[#097178] text-[#fcfcfc] rounded-lg px-4 py-3.5 flex items-center justify-center gap-1 hover:bg-[#07595f] transition-colors"
        >
          <UserRoundPlus />
          <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] leading-normal">
            ADD Another Member
          </p>
        </button>
        <button
          onClick={() => {
            setShowSuccess(false);
            setAddMember(false);
          }}
          className="flex-1 min-w-[260px] cursor-pointer border-2 border-[#097178] text-[#097178] rounded-lg px-4 py-3.5 flex items-center justify-center hover:bg-[#097178]/10 transition-colors"
        >
          <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] leading-normal">
            Back
          </p>
        </button>
      </div>
    </div>
  );
}

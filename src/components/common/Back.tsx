import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div
      onClick={handleBack}
      className="cursor-pointer z-10 py-[16px] flex items-center justify-center gap-2 h-[48px] rounded-[8px]"
    >
      <MoveLeft size={25} color="#666666" />
      <p className="text-[16px] font-medium text-[#666666]">Back to Doctor Profile</p>
    </div>
  );
}

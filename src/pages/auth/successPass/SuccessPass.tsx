import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Overlay } from "@/components/common/Overlay";

export default function SuccessPage() {
  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `url("/src/assets/auth/landing.jpg")`,
      }}
    >
      {/* Overlay */}
      <Overlay />
      <Card className="w-full max-w-md bg-[#d9d9d9]/80 backdrop-opacity-10 border-none rounded-2xl shadow-1xl">
        <CardContent className="flex flex-col items-center text-center space-y-6 p-6 sm:p-8">
          <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-600">
            <Check
              className="text-white w-10 h-10 sm:w-12 sm:h-12"
              strokeWidth={3}
            />
          </div>

          <h2 className="text-lg sm:text-xl font-semibold text-teal-800">
            Password Changed
          </h2>

          <div className="w-full bg-[#D8F3DF] rounded-lg px-4 py-3 text-sm text-gray-700 flex items-center gap-2">
            <span className="text-[#4D4D4D] text-[16px]">ⓘ</span>
            <span>You changed your password successfully</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

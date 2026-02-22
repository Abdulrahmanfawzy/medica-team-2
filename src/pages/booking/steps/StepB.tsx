import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useBooking } from "@/lib/providers/BookingProvider";

export default function StepB({ register, errors, handleNext }: any) {
  const { changeStep } = useBooking();
  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>();
  const [time, setTime] = useState<object>({});

  const timeSlots = {
    Morning: ["09:30", "10:00", "10:30", "11:00", "11:30"],
    Afternoon: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"],
    Evening: ["16:00", "16:30", "17:00", "17:30", "18:00"],
  };

  useEffect(() => {
    if (selectedDate && !selectedTime) {
      setTime(timeSlots);
    }
  }, [selectedDate]);

  // Calendar logic
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Get calendar days for the current month
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // First day of the month (0 = Sunday, 6 = Saturday)
    const firstDay = new Date(year, month, 1).getDay();

    // Number of days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Number of days in the previous month
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days: Array<{
      date: Date | null;
      day: number | null;
      isCurrentMonth: boolean;
      available: boolean;
    }> = [];

    // Add previous month's trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push({
        date: new Date(year, month - 1, day),
        day,
        isCurrentMonth: false,
        available: false,
      });
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const today = new Date();

      // Simple availability logic: days before today are unavailable
      let available = true;
      if (
        date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
      ) {
        available = false;
      }

      days.push({
        date,
        day,
        isCurrentMonth: true,
        available,
      });
    }

    // Add next month's leading days to fill the grid (35 or 42 cells total)
    const remainingCells = 35 - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        date: new Date(year, month + 1, day),
        day,
        isCurrentMonth: false,
        available: false,
      });
    }

    return days;
  }, [currentMonth]);

  // Navigate to previous month
  const goToPrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  // Get month name
  const monthName = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Check if a date is selected
  const isDateSelected = (date: Date | null) => {
    if (!selectedDate || !date) {
      return false;
    } else {
      return (
        selectedDate.getDate() === date.getDate() &&
        selectedDate.getMonth() === date.getMonth() &&
        selectedDate.getFullYear() === date.getFullYear()
      );
    }
  };

  return (
    <>
      {/* Date & Time Selection */}
      <div className="flex gap-6">
        {/* Calendar */}
        <div className="flex flex-col gap-6 p-8 rounded-2xl border border-[#e6e6e6] flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar />
              <p className=" text-[20px] text-[#07595f] uppercase tracking-[0.4px]">
                Select Date
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={goToPrevMonth}
                className="border border-[#666] rounded-lg p-2.5 w-10 h-10 flex items-center justify-center hover:bg-gray-50"
              >
                <ChevronLeft />
              </button>
              <p className=" text-[16px] text-[#666] uppercase tracking-[0.4px] w-[145px] text-center">
                {monthName}
              </p>
              <button
                type="button"
                onClick={goToNextMonth}
                className="border border-[#666] rounded-lg p-2.5 w-10 h-10 flex items-center justify-center hover:bg-gray-50"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-2.5">
            {dayNames.map((name) => (
              <div
                key={name}
                className="text-center border-b-2 border-[#202020] pb-2"
              >
                <p className=" text-[24px] text-[#202020] uppercase">{name}</p>
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2.5">
            {calendarDays.map((item, idx) => {
              if (!item.isCurrentMonth) return <div key={idx} />;

              const isSelected = isDateSelected(item.date);
              const isAvailable = item.available;

              return (
                <label key={idx} className="block cursor-pointer">
                  <input
                    {...register("date")}
                    type="radio"
                    value={item.date?.toISOString()}
                    checked={isSelected}
                    className="hidden"
                    disabled={!isAvailable}
                    onChange={(e) => {
                      register("date").onChange(e);
                      setSelectedDate(item.date);
                    }}
                  />
                  <div
                    className={`rounded-lg p-2 h-[100px] flex items-center justify-center w-full transition-colors ${
                      isSelected
                        ? "bg-[#097178] text-[#fcfcfc]"
                        : isAvailable
                          ? "bg-[#fcfcfc] border border-[#333] text-[#202020] hover:bg-[#097178]/10"
                          : "bg-[#f2f2f2] border border-[#b3b3b3] text-[#333] cursor-not-allowed"
                    }`}
                  >
                    <p className="text-[24px]">{item.day}</p>
                  </div>
                </label>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#097178] rounded" />
              <p className=" text-[14px] text-[#4d4d4d]">Available</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#f2f2f2] border border-[#b3b3b3] rounded" />
              <p className=" text-[14px] text-[#4d4d4d]">Unavailable</p>
            </div>
          </div>
          {errors.date && (
            <p className="text-red-500 text-sm">Please select a date</p>
          )}
        </div>

        {/* Available Times */}
        <div
          className={`h-fit flex flex-col gap-6 px-[16px] py-[24px] rounded-2xl border border-[#e6e6e6] w-[300px] ${errors.time && "ring-2 ring-red-500"}`}
        >
          <p className=" text-[20px] text-[#07595f] uppercase tracking-[0.4px]">
            Available Times
          </p>

          {Object.keys(time).length === 0 ? (
            <p className="text-[14px] text-center text-[#666666] font-normal py-[10px] px-[16px] bg-[#F2F2F2] rounded-[8px] border border-[#B3B3B3]">
              Please select a date to view available time slots
            </p>
          ) : (
            Object.entries(time).map(([period, slots]) => (
              <div key={period} className="flex flex-col gap-3">
                <p className=" text-[14px] text-[#666]">{period}</p>

                {(slots as string[]).map((t) => (
                  <label key={t} className="block cursor-pointer">
                    <input
                      {...register("time")}
                      type="radio"
                      value={t}
                      className="hidden"
                      onChange={(e) => {
                        register("time").onChange(e);
                        setSelectedTime(t);
                      }}
                    />
                    <div
                      className={`rounded-lg p-3 border transition-colors flex items-center justify-center ${
                        t === selectedTime
                          ? "bg-[#097178] border-[#097178] text-[#fcfcfc]"
                          : "border-[#097178] text-[#07595f] hover:bg-[#097178]/10"
                      }`}
                    >
                      <p className="text-[16px]">{t}</p>
                    </div>
                  </label>
                ))}
              </div>
            ))
          )}
          {errors.time && (
            <p className="text-red-500 text-sm">Please select a time slot</p>
          )}
        </div>
      </div>

      {/* Selected Appointment */}
      {selectedDate && (
        <div className="p-6 bg-[#f5f5f5] rounded-lg border border-[#B3B3B3]">
          <p className=" text-[16px] text-[#666] mb-2">Selected Appointment</p>
          <p className=" text-[16px] text-[#202020]">
            {selectedDate &&
              `[Date: ${selectedDate.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }) || "No date selected"}] [Time: ${selectedTime || "No time selected"}]`}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between mb-[72px]">
        <button
          type="button"
          onClick={() => changeStep(1)}
          className="cursor-pointer w-[188px] h-[56px] px-[16px] py-[10px] font-semibold text-[18px] border-2 border-[#097178] text-[#097178] rounded-[8px]"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="cursor-pointer w-[188px] h-[56px] px-[16px] py-[10px] font-semibold text-[18px] bg-[#07595f] text-[#fcfcfc] rounded-[8px]"
        >
          Continue
        </button>
      </div>
    </>
  );
}

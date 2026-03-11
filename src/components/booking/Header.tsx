export default function Header({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[16px] text-[#333] uppercase tracking-[0.4px]">
        Step {step} of 4
      </p>
      <h1 className="text-[24px] text-[#1a1a1a]">
        {title}
      </h1>
      <p className="text-[16px] text-[#666]">
        {description}
      </p>
    </div>
  );
}

export const Title = ({ title, info }: { title: string; info: string }) => {
  return (
    <>
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mt-2 text-[#097178]">
          {title}
        </h2>
        <p className="text-xs font-semibold sm:text-sm text-teal-800 mt-2 max-w-xs">
          {info}
        </p>
      </div>
    </>
  );
};

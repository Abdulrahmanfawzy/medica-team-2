export const Title = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className="text-[26px] text-[var(--text-primary-gray)] font-medium text-center">
        {title}
      </h1>
    </>
  );
};

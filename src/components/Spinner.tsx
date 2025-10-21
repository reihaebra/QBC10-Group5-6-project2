const Spinner = () => {
  return (
    <div role="status" className="flex justify-center items-center h-screen">
      <span className="loading loading-bars loading-xl bg-[var(--color-primary-main)]"></span>
    </div>
  );
};

export default Spinner;

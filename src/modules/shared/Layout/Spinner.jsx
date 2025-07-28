const Spinner = ({ message }) => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center flex-col">
      <h2 className="font-semibold"> laoding {message}...</h2>
      <div className="mt-2">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-xl"></span>
      </div>{" "}
    </div>
  );
};

export default Spinner;

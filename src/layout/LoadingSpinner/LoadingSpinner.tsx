import Translation from "../../components/Translation/Translation";

const LoadingSpinner = () => {
  return (
    <div className="d-flex gap-2 align-items-center justify-content-center">
      <div className="spinner-border" role="status"></div>
      <span>
        <Translation type="system" origin="Loading..." />
      </span>
    </div>
  );
};

export default LoadingSpinner;

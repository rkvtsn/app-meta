import "./styles.css";

const FormErrorLine = ({ isTouched, error }) => {
  return isTouched && error ? (
    <div className="error-form-line">{error}</div>
  ) : null;
};

export default FormErrorLine;

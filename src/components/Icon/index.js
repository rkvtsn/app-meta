import "./styles.css";

const Icon = ({ icon, ...iconProps }) => {
  return (
    <i className="icon" {...iconProps}>
      <img alt={icon} src={icon} />
    </i>
  );
};

export default Icon;

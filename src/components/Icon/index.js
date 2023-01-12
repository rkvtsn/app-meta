import "./styles.css";

/**
 *
 * @param {string} size - s, m, l
 * @returns
 */
const Icon = ({ icon, size = "s", ...iconProps }) => {
  return (
    <i className={`icon icon-size-${size}`} {...iconProps}>
      <img alt={icon} src={icon} />
    </i>
  );
};

export default Icon;

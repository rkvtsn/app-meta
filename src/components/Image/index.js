import { memo } from "react";
import "./styles.css";

const Image = ({ src, alt, ...imgProps }) => {
  return <img className="image" src={src} alt={alt ?? src} {...imgProps} />;
};

export default memo(Image);

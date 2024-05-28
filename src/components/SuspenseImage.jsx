import React from "react";
import useImage from "../hooks/useImage";

const SuspenseImage = ({ src, alt, ...rest }) => {
  useImage(src);
  return <img {...rest} src={src} alt={alt} />;
};

export default SuspenseImage;

import React, { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import useImage from "../hooks/useImage";

const SuspenseImage = ({
  src,
  alt,
  ...rest
}: DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  useImage(src);
  return <img {...rest} src={src} alt={alt} />;
};

export default SuspenseImage;

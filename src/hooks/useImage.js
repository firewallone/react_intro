import { useSuspenseQuery } from "@tanstack/react-query";

const loadImage = async (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = () => reject(new Error(`Failed to load image ${src}`));
  });
};

const useImage = (src) => {
  return useSuspenseQuery({
    queryKey: ["image", src],
    queryFn: () => loadImage(src),
  });
};

export default useImage;

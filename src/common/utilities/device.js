const isiOS = () => {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
};

const isAndroid = () => {
  return /Android/i.test(navigator.userAgent);
};

const isMobile = () => {
  return isAndroid() || isiOS();
};

export { isMobile };

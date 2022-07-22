function getPercentage(value) {
  const newValue = value * 10;
  const newValueToStr = newValue + "";

  return `${newValueToStr.substring(0, 4)}%`;
}

const isiOS = () => {
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.vendor === "MacIntel" && navigator.maxTouchPoints > 1)
  );
};

const isAndroid = () => {
  return /Android/i.test(navigator.userAgent);
};

const isMobile = () => {
  return isAndroid() || isiOS();
};

export { isMobile, getPercentage };

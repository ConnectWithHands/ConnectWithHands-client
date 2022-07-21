function getPercentage(value) {
  const newValue = value * 10;
  const newValueToStr = newValue + "";

  return `${newValueToStr.substring(0, 4)}%`;
}

const isiOS = () => {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
};

const isAndroid = () => {
  return /Android/i.test(navigator.userAgent);
};

const isMobile = () => {
  return isAndroid() || isiOS();
};

export { isMobile, getPercentage };

export const isIOS =
  process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

export const IS_DEV = process.env.NODE_ENV === "development";

export const isIOS =
  !import.meta.env.SSR && /iPad|iPhone|iPod/.test(navigator.userAgent);

export const IS_DEV = import.meta.env.DEV;

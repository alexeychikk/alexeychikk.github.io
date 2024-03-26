import type { CSSProperties } from 'react';

export function loopStyles(
  times: number,
  getSelectorName: (index: number) => string,
  getCssProperties: (index: number) => CSSProperties,
): Record<string, CSSProperties> {
  return new Array(times).fill(0).reduce((res, _, index) => {
    res[getSelectorName(index)] = getCssProperties(index);
    return res;
  }, {});
}

export function delayNthChildAnimation(
  childCount: number,
  animationDuration: number,
) {
  return loopStyles(
    childCount,
    (i) => `&:nth-child(${i + 1})`,
    (i) => ({
      animationDelay: `${(i * animationDuration).toFixed(1)}s`,
    }),
  );
}

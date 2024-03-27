import clsx from 'clsx';
import React, { useMemo } from 'react';
import useResizeObserver from 'use-resize-observer';

import { useStyles } from './CodeLikeBlock.styles';
import { codeLikeBlockContext } from './lib';

interface CodeLikeBlockProps {
  className?: string;
  children: React.ReactNode;
  hasExtraLine?: boolean;
}

export const CodeLikeBlock: React.FC<CodeLikeBlockProps> = (props) => {
  const { ref: childrenRef, height: childrenHeight = 1 } =
    useResizeObserver<HTMLDivElement>();
  const { ref: sampleLineRef, height: sampleLineHeight = 1 } =
    useResizeObserver<HTMLDivElement>();
  const linesCount =
    Math.ceil(childrenHeight / sampleLineHeight) +
      (props.hasExtraLine ? 1 : 0) || 0;
  const classes = useStyles();
  const value = useMemo(
    () => ({ lineHeight: sampleLineHeight, linesCount }),
    [sampleLineHeight, linesCount],
  );

  return (
    <codeLikeBlockContext.Provider value={value}>
      <div className={clsx(classes.codeLikeBlock, props.className)}>
        <div
          className={clsx(classes.lineNumbers, classes.sampleLine)}
          ref={sampleLineRef}
        >
          1234567890
        </div>
        <div className={classes.lineNumbers}>
          {/* eslint-disable-next-line prefer-spread */}
          {Array.apply(null, { length: linesCount } as []).map((_, i) => (
            <div className={classes.lineNum} key={i}>
              {i + 1}
            </div>
          ))}
        </div>
        <div className={classes.childrenWrapper} ref={childrenRef}>
          {props.children}
        </div>
      </div>
    </codeLikeBlockContext.Provider>
  );
};

CodeLikeBlock.defaultProps = {
  hasExtraLine: true,
};

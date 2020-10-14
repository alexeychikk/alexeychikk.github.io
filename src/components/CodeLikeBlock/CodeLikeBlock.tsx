import React, { createContext, useContext } from "react";
import clsx from "clsx";
import useResizeObserver from "use-resize-observer";

import { useStyles } from "./CodeLikeBlock.styles";

interface CodeLikeBlockProps {
  className?: string;
  children: React.ReactNode;
}

export interface CodeLikeBlockContext {
  linesCount: number;
  lineHeight: number;
}

const context = createContext<CodeLikeBlockContext>({
  linesCount: 0,
  lineHeight: 0,
});

export const CodeLikeBlock: React.FC<CodeLikeBlockProps> = (props) => {
  const { ref: childrenRef, height: childrenHeight = 1 } = useResizeObserver<
    HTMLDivElement
  >();
  const {
    ref: sampleLineRef,
    height: sampleLineHeight = 1,
  } = useResizeObserver<HTMLDivElement>();
  const linesCount = Math.ceil(childrenHeight / sampleLineHeight) + 1;
  const classes = useStyles();

  return (
    <context.Provider value={{ lineHeight: sampleLineHeight, linesCount }}>
      <div className={clsx(classes.codeLikeBlock, props.className)}>
        <div
          className={clsx(classes.lineNumbers, classes.sampleLine)}
          ref={sampleLineRef}
        >
          1234567890
        </div>
        <div className={classes.lineNumbers}>
          {/* eslint-disable-next-line prefer-spread */}
          {Array.apply(null, { length: linesCount } as []).map((e, i) => (
            <div className={classes.lineNum} key={i}>
              {i + 1}
            </div>
          ))}
        </div>
        <div className={classes.childrenWrapper} ref={childrenRef}>
          {props.children}
        </div>
      </div>
    </context.Provider>
  );
};

export const useCodeBlockContext = () => useContext(context);

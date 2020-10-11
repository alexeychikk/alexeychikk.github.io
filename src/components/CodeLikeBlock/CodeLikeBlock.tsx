import React from "react";
import cn from "classnames";
import useResizeObserver from "use-resize-observer";

import { useStyles } from "./CodeLikeBlock.styles";

interface CodeLikeBlockProps {
  className?: string;
  children: React.ReactNode;
}

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
    <div className={cn(classes.root, props.className)}>
      <div
        className={cn(classes.lines, classes.sampleLine)}
        ref={sampleLineRef}
      >
        1234567890
      </div>
      <div className={classes.lines}>
        {/* eslint-disable-next-line prefer-spread */}
        {Array.apply(null, { length: linesCount } as []).map((e, i) => (
          <div className={classes.line} key={i}>
            {i + 1}
          </div>
        ))}
      </div>
      <div className={classes.childrenWrapper} ref={childrenRef}>
        {props.children}
      </div>
    </div>
  );
};

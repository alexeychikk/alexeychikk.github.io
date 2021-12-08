import React from "react";
import clsx from "clsx";

import { useStyles } from "./CommentLikeBlock.styles";

interface CommentLikeBlockProps {
  className?: string;
  title?: React.ReactNode;
}

export const CommentLikeBlock: React.FC<CommentLikeBlockProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.commentLikeBlock, props.className)}>
      <div className={classes.slash}>
        /** {props.title} {!props.children && "*/"}
      </div>
      {props.children && (
        <>
          <div className={classes.line} />
          <div className={classes.childrenWrapper}>{props.children}</div>
          <div className={classes.slash}>&nbsp;*/</div>
        </>
      )}
    </div>
  );
};

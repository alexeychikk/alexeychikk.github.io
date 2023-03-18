import React from "react";

export interface EmojiProps {
  children: React.ReactNode;
  className?: string;
  label: string;
}

export const Emoji: React.FC<EmojiProps> = (props) => {
  return (
    <span className={props.className} role="img" aria-label={props.label}>
      {props.children}
    </span>
  );
};

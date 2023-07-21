import React from "react";

export function reactNodeToString(node: React.ReactNode): string {
  switch (typeof node) {
    case "string":
      return node;
    case "bigint":
    case "number":
      return node.toString();
    case "object":
      if (Array.isArray(node)) {
        return node.map(reactNodeToString).join("");
      } else if (node) {
        return reactNodeToString((node as React.ReactElement).props.children);
      }
  }
  return "";
}

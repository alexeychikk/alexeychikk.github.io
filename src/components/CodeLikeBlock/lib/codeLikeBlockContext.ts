import { createContext, useContext } from 'react';

export interface CodeLikeBlockContext {
  linesCount: number;
  lineHeight: number;
}

export const codeLikeBlockContext = createContext<CodeLikeBlockContext>({
  linesCount: 0,
  lineHeight: 0,
});

export const useCodeBlockContext = () => useContext(codeLikeBlockContext);

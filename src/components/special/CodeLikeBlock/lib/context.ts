import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

const CONTEXT = Symbol('CodeLikeBlock');

export type CodeLikeBlockContext = {
  lineHeight: number;
  linesCount: number;
};

export function createCodeLikeBlockContext(
  initialValue?: Partial<CodeLikeBlockContext>,
): Writable<CodeLikeBlockContext> {
  const context = writable({ lineHeight: 1, linesCount: 0, ...initialValue });
  setContext(CONTEXT, context);
  return context;
}

export function getCodeLikeBlockContext(): Writable<CodeLikeBlockContext> {
  return getContext(CONTEXT);
}

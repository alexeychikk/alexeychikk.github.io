<script lang="ts">
  import { clsx } from 'clsx';

  import styles from './CodeLikeBlock.module.scss';
  import { createCodeLikeBlockContext } from './lib';

  export let hasExtraLine = true;

  let childrenHeight = 1;
  let lineHeight = 1;

  const context = createCodeLikeBlockContext();

  $: linesCount =
    Math.ceil(childrenHeight / lineHeight) + (hasExtraLine ? 1 : 0) || 0;
  $: context.set({ lineHeight, linesCount });
</script>

<div class={clsx(styles.codeLikeBlock, $$restProps.class)}>
  <div
    class="{styles.lineNumbers} {styles.sampleLine}"
    bind:offsetHeight={lineHeight}
  >
    1234567890
  </div>
  <div class={styles.lineNumbers}>
    {#each { length: linesCount } as _, i}
      <div class={styles.lineNum}>{i + 1}</div>
    {/each}
  </div>
  <div class={styles.childrenWrapper} bind:offsetHeight={childrenHeight}>
    <slot />
  </div>
</div>

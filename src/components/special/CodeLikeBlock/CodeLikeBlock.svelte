<script lang="ts">
  import { clsx } from 'clsx';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  import styles from './CodeLikeBlock.module.scss';

  export let hasExtraLine = true;

  let childrenHeight = 1;
  let lineHeight = 1;

  const context = writable({ lineHeight, linesCount: 0 });
  setContext('codeLikeBlock', context);

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

<script lang="ts">
  import { clsx } from 'clsx';

  import styles from './CommentLikeBlock.module.scss';
</script>

<div class={clsx(styles.commentLikeBlock, $$restProps.class)}>
  <div class={styles.slash}>
    /** <slot name="title" />
    {!$$slots.default ? '*/' : ''}
  </div>
  {#if $$slots.default}
    <div class={styles.line} />
    <div class={styles.childrenWrapper}><slot /></div>
    <div class={styles.slash}>&nbsp;*/</div>
  {/if}
</div>

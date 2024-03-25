<script lang="ts" generics="T">
  import styles from './Timeline.module.scss';

  export let data: T[] = [];
  export let theme: 'purple' | 'green' = 'purple';
</script>

<ul class="{styles.timeline} {styles[theme]} {$$restProps.class}">
  {#each data as item}
    <li class={styles.item}>
      <div class={styles.separator}>
        <div class={styles.dot} />
        <div class={styles.line} />
      </div>
      <div class={styles.content}>
        <slot {item} />
      </div>
    </li>
  {/each}

  <li class="{styles.item} {styles.itemStart}">
    <div class={styles.separator}>
      <div class={styles.dot} />
      <div class={styles.line} />
    </div>
    <div class={styles.content}>
      <slot name="start" />
    </div>
  </li>
</ul>

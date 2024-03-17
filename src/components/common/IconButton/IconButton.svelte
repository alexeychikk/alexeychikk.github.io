<script lang="ts">
  import styles from './IconButton.module.scss';
</script>

<button class={styles.iconButton} {...$$restProps}>
  <slot />
</button>

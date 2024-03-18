<script lang="ts">
  import styles from './IconButton.module.scss';
</script>

<button
  {...$$restProps}
  class="{styles.iconButton} {$$restProps.class}"
  on:click
>
  <slot />
</button>

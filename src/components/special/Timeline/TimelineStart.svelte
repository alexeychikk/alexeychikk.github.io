<script lang="ts">
  import { clsx } from 'clsx';

  import styles from './TimelineItem.module.scss';
</script>

<div class={clsx(styles.timelineItem, styles.timelineStart, $$restProps.class)}>
  <h6 class={styles.title}><slot /></h6>
</div>

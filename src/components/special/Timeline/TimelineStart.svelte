<script lang="ts">
  import styles from './TimelineItem.module.scss';
</script>

<div class="{styles.timelineItem} {styles.timelineStart} {$$restProps.class}">
  <h6 class={styles.title}><slot /></h6>
</div>

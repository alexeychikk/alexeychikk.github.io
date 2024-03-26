<script lang="ts">
  import { clsx } from 'clsx';

  import styles from './Skeleton.module.scss';
</script>

<div class={clsx(styles.skeleton, $$restProps.class)}><slot /></div>

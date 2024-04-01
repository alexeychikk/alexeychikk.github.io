<script lang="ts">
  import { clsx } from 'clsx';

  import styles from './Divider.module.scss';
</script>

<hr class={clsx(styles.divider, $$restProps.class)} />

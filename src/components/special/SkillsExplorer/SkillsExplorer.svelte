<script lang="ts">
  import { clsx } from 'clsx';

  import styles from './SkillsExplorer.module.scss';
</script>

<div class={clsx(styles.skillsExplorer, $$restProps.class)}>
  <div class={styles.childrenWrapper}><slot /></div>
</div>

<script lang="ts">
  import AppBar from './AppBar';
  import styles from './Layout.module.scss';

  let isSkillsDrawerHidden = true;
  let isNavigationDrawerHidden = true;
</script>

<AppBar />

<main class={styles.content}>
  <div class={styles.routesWrapper}>
    <slot />
  </div>
</main>

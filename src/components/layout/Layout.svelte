<script lang="ts">
  import Drawer from '../common/Drawer';
  import MySkills from '../special/MySkills';

  import AppBar from './AppBar';
  import Breadcrumbs from './Breadcrumbs';
  import styles from './Layout.module.scss';

  let isSkillsDrawerOpened = false;
  let isNavigationDrawerOpened = false;
</script>

<AppBar
  on:openNavigationDrawer={() => (isNavigationDrawerOpened = true)}
  on:openSkillsDrawer={() => (isSkillsDrawerOpened = true)}
/>

<Drawer bind:open={isSkillsDrawerOpened} closable>
  <MySkills />
</Drawer>

<Drawer bind:open={isNavigationDrawerOpened} position="right" closable>
  {`Lorem ipsum dolor sit amet. `.repeat(100)}
</Drawer>

<main class={styles.content}>
  <Breadcrumbs class={styles.breadcrumbs} />
  <div class={styles.routesWrapper}>
    <slot />
  </div>
</main>

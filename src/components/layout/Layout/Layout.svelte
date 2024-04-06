<script lang="ts">
  import { createSkillsContext } from '../../../stores';
  import Drawer from '../../common/Drawer';
  import MySkills from '../../special/MySkills';
  import AppBar from '../AppBar';
  import Breadcrumbs from '../Breadcrumbs';
  import MobileNavigation from '../MobileNavigation';

  import styles from './Layout.module.scss';

  let isSkillsDrawerOpened = false;
  let isNavigationDrawerOpened = false;

  createSkillsContext();
</script>

<AppBar
  on:openNavigationDrawer={() => (isNavigationDrawerOpened = true)}
  on:openSkillsDrawer={() => (isSkillsDrawerOpened = true)}
/>

<Drawer bind:open={isSkillsDrawerOpened} responsive>
  <MySkills />
</Drawer>

<Drawer bind:open={isNavigationDrawerOpened} position="right">
  <MobileNavigation on:click={() => (isNavigationDrawerOpened = false)} />
</Drawer>

<main class={styles.content}>
  <Breadcrumbs class={styles.breadcrumbs} />
  <div class={styles.routesWrapper}>
    <slot />
  </div>
</main>

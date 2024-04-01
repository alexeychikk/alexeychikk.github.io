<script lang="ts">
  import { clsx } from 'clsx';
  import IconEmailOutline from 'svelte-material-icons/EmailOutline.svelte';
  import IconGithub from 'svelte-material-icons/Github.svelte';
  import IconLinkedIn from 'svelte-material-icons/Linkedin.svelte';

  import { ROUTES_META } from '../../../config/routesMeta';
  import Divider from '../../common/Divider';
  import NavLink from '../../common/NavLink';

  import styles from './MobileNavigation.module.scss';

  const routes = Object.values(ROUTES_META).filter((r) => !r.hidden);
</script>

<div class={clsx(styles.mobileNavigation, $$restProps.class)}>
  {#each routes as route (route.to)}
    <NavLink
      activeOnlyWhenExact={route.activeOnlyWhenExact}
      activeClass={styles.active}
      class={styles.navLink}
      hasIcon
      icon={route.icon}
      to={route.to}
      on:click
    >
      {route.label}
    </NavLink>
  {/each}

  <Divider />

  <NavLink
    class={styles.navLink}
    to="https://github.com/alexeychikk"
    icon={IconGithub}
    hasIcon
    external
  >
    GitHub
  </NavLink>
  <NavLink
    class={styles.navLink}
    to="https://www.linkedin.com/in/alex-zinkevych/"
    icon={IconLinkedIn}
    hasIcon
    external
  >
    LinkedIn
  </NavLink>
  <NavLink
    class={styles.navLink}
    to="mailto:alexdarkmm@gmail.com"
    icon={IconEmailOutline}
    hasIcon
    external
  >
    alexdarkmm@gmail.com
  </NavLink>
</div>

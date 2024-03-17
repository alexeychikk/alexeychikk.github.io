<script lang="ts">
  import { ROUTES_META } from '../../../config/routesMeta';
  import NavLink from '../../common/NavLink';
  import styles from './Navigation.module.scss';

  let routes = Object.values(ROUTES_META).filter((r) => !r.hidden);
</script>

<div class="{styles.navigation} {$$props.class}">
  {#each routes as route (route.to)}
    <NavLink
      activeOnlyWhenExact={route.activeOnlyWhenExact}
      activeClass={styles.active}
      class={styles.navLink}
      hasIcon
      icon={route.icon}
      to={route.to}
    >
      {route.label}
    </NavLink>
  {/each}
</div>

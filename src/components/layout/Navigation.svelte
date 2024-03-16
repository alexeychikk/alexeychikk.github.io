<script lang="ts">
  import { ROUTES_META } from '../../config/routesMeta';
  import NavLink from '../common/NavLink.svelte';
</script>

<div class="navigation">
  {#each Object.values(ROUTES_META) as route (route.to)}
    <NavLink
      to={route.to}
      icon={route.icon}
      activeOnlyWhenExact={route.activeOnlyWhenExact}
    >
      {route.label}
    </NavLink>
  {/each}
</div>

<style lang="scss">
  @use 'src/assets/styles/theme';

  .navigation {
    display: flex;
    background-color: theme.$color-bg-dark;
    align-items: center;
  }

  .navigation :global(.nav-link) {
    padding: 0 4rem 0 2rem;
    margin-right: 1px;
    color: theme.$color-text-secondary;
    background-color: theme.$color-bg-light;
  }

  .navigation :global(.nav-link.active) {
    background-color: theme.$color-bg-default;
  }
</style>

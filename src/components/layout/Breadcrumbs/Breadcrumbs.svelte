<script lang="ts">
  import IconChevronRight from 'svelte-material-icons/ChevronRight.svelte';
  import { Link, useLocation } from 'svelte-routing';

  import IconJson from '../../../assets/icons/json.svg?component';
  import { ROUTES_META } from '../../../config/routesMeta';
  import Popup from '../../common/Popup';

  import styles from './Breadcrumbs.module.scss';

  let isMenuOpened = false;

  const location = useLocation();

  $: currentRoute = ROUTES_META[$location.pathname];
  $: routeIcon = currentRoute.icon || IconJson;
  $: restRoutes = Object.values(ROUTES_META).filter((r) => r !== currentRoute);
</script>

<div class="{styles.breadcrumbs} {$$restProps.class}">
  <span class={styles.item}>src</span>

  <IconChevronRight class={styles.separator} />

  <Popup bind:open={isMenuOpened}>
    <button
      slot="button"
      class="{styles.item} {styles.active}"
      on:click={() => (isMenuOpened = true)}
    >
      <svelte:component this={routeIcon} class={styles.icon} />
      {currentRoute.label}
    </button>

    <div class={styles.list}>
      {#each restRoutes as { to, label, icon = IconJson } (to)}
        <Link
          class="{styles.item} {styles.link}"
          {to}
          on:click={() => (isMenuOpened = false)}
        >
          <svelte:component this={icon} class={styles.icon} />
          {label}
        </Link>
      {/each}
    </div>
  </Popup>
</div>

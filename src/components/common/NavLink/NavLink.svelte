<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { Link, useLocation } from 'svelte-routing';

  import IconJson from '../../../assets/icons/json.svg?component';

  import styles from './NavLink.module.scss';

  export let activeClass: string = '';
  export let activeOnlyWhenExact: boolean = false;
  export let hasIcon: boolean = false;
  export let icon: ComponentType = IconJson;
  export let external: boolean = false;
  export let to: string;
  export let target: string = '';

  const location = useLocation();
  $: active = activeOnlyWhenExact
    ? $location.pathname === to
    : $location.pathname.startsWith(to);

  $: className = `${styles.navLink} ${$$restProps.class} ${active ? `${styles.active} ${activeClass}` : ''}`;
</script>

{#if external}
  <a href={to} {target} class={className}>
    {#if hasIcon}
      <svelte:component this={icon} class={styles.icon} />
    {/if}
    <slot />
  </a>
{:else}
  <Link {to} class={className}>
    {#if hasIcon}
      <svelte:component this={icon} class={styles.icon} />
    {/if}
    <slot />
  </Link>
{/if}

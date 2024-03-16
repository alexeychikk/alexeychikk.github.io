<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { Link, useLocation } from 'svelte-routing';
  import IconJson from '../../assets/icons/json.svg?component';

  export let activeOnlyWhenExact: boolean = false;
  export let hasIcon: boolean = false;
  export let icon: ComponentType = IconJson;
  export let iconClass: string = '';
  export let external: boolean = false;
  export let to: string;
  export let target: string = '';

  const location = useLocation();
  $: active = activeOnlyWhenExact
    ? $location.pathname === to
    : $location.pathname.startsWith(to);
</script>

{#if external}
  <a href={to} {target} class="nav-link" class:active>
    {#if hasIcon}
      <svelte:component this={icon} class={iconClass} />
    {/if}
    <slot />
  </a>
{:else}
  <Link {to} class="nav-link {active ? 'active' : ''}">
    {#if hasIcon}
      <svelte:component this={icon} class={iconClass} />
    {/if}
    <slot />
  </Link>
{/if}

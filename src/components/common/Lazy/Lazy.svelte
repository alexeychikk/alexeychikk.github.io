<script lang="ts">
  import { onMount, type ComponentType } from 'svelte';

  export let component: () => Promise<{ default: ComponentType }>;
  export let showFallback = false;

  let loadedComponent: ComponentType | undefined;

  onMount(() => {
    component().then((module) => {
      loadedComponent = module.default;
    });
  });
</script>

{#if loadedComponent}
  <svelte:component this={loadedComponent} {...$$restProps} />
{:else if showFallback}
  <slot />
{/if}

<script lang="ts">
  import { clsx } from 'clsx';
  import IconOpenInNew from 'svelte-material-icons/OpenInNew.svelte';
  import { Link } from 'svelte-routing';

  import styles from './LinkOpen.module.scss';

  export let to: string;
  export let external = false;
  export let hasLinkIcon = true;

  let className = clsx(styles.linkOpen, $$restProps.class);
</script>

{#if external}
  <a class={className} href={to} target="_blank" rel="noopener noreferrer">
    <slot />
    {#if hasLinkIcon}
      <IconOpenInNew class={styles.icon} />
    {/if}
  </a>
{:else}
  <Link class={className} {to}>
    <slot />
    {#if hasLinkIcon}
      <IconOpenInNew class={styles.icon} />
    {/if}
  </Link>
{/if}

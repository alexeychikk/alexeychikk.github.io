<script lang="ts">
  import AppBar from './AppBar.svelte';

  let isSkillsDrawerHidden = true;
  let isNavigationDrawerHidden = true;
</script>

<AppBar />

<main>
  <slot />
</main>

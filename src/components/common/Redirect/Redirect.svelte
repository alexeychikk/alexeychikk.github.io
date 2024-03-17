<script lang="ts">
  import { tick } from 'svelte';
  import { navigate } from 'svelte-routing';
  export let to = '/';
  tick().then(() => navigate(to));
</script>

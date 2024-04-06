<script lang="ts">
  import { MAX_SKILL_NAME_LENGTH } from '../../config/skills';

  export let name: string;
  export let gap: number | undefined = undefined;
</script>

{name}
{'\u00A0'.repeat(MAX_SKILL_NAME_LENGTH + (gap || 0) - name.length)}

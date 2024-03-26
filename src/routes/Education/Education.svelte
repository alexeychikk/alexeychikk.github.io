<script lang="ts">
  import styles from '../../assets/styles/shared.module.scss';
  import CommentLikeBlock from '../../components/special/CommentLikeBlock';
  import Timeline, {
    TimelineItem,
    TimelineStart,
  } from '../../components/special/Timeline';
  import { EDUCATION } from '../../config/education';
</script>

<Timeline class={styles.container} data={EDUCATION} theme="green" let:item>
  <TimelineItem dateFrom={item.dateFrom} dateTo={item.dateTo}>
    <svelte:fragment slot="title">
      {item.name}
    </svelte:fragment>
    <svelte:fragment slot="subtitle">
      {item.degree}{item.field ? `, ${item.field}` : ''}
    </svelte:fragment>

    {#if item.description}
      <CommentLikeBlock>
        {@html item.description}
      </CommentLikeBlock>
    {:else}
      <CommentLikeBlock>
        <svelte:fragment slot="title">
          {item.grade ? `Grade: ${item.grade}` : ''}
        </svelte:fragment>
      </CommentLikeBlock>
    {/if}
  </TimelineItem>

  <TimelineStart slot="start">School</TimelineStart>
</Timeline>

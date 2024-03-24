<script lang="ts">
  import styles from '../assets/styles/shared.module.scss';
  import Timeline, {
    TimelineItem,
    TimelineStart,
  } from '../components/special/Timeline';
  import { EXPERIENCE } from '../config/experience';
</script>

<Timeline class={styles.container} data={EXPERIENCE} let:item>
  <TimelineItem dateFrom={item.dateFrom} dateTo={item.dateTo}>
    <svelte:fragment slot="title">{item.company.name}</svelte:fragment>
    <svelte:fragment slot="subtitle">{item.position}</svelte:fragment>
    <div>
      {item.company.description}
    </div>
  </TimelineItem>

  <TimelineStart slot="start">Initial commit</TimelineStart>
</Timeline>

<script lang="ts">
  import { clsx } from 'clsx';
  import { addMonths, format } from 'date-fns';

  import { formatIntervalShort } from '../../../utils';

  import styles from './TimelineItem.module.scss';

  export let dateFrom: Date;
  export let dateTo: Date | undefined = undefined;
</script>

<div class={clsx(styles.timelineItem, $$restProps.class)}>
  <h6 class={styles.title}><slot name="title" /></h6>

  <p class={styles.dates}>
    {format(dateFrom, 'MMM yyyy')}
    {' – '}
    {dateTo ? format(dateTo, 'MMM yyyy') : 'Present'}
    <span class={styles.timeDiff}>
      {' < '}
      {formatIntervalShort({
        start: dateFrom,
        end: addMonths(dateTo || new Date(), 1),
      })}
      {' >'}
    </span>
  </p>

  {#if $$slots.subtitle}
    <p class={styles.subtitle}>
      <slot name="subtitle" />
    </p>
  {/if}

  <slot />
</div>

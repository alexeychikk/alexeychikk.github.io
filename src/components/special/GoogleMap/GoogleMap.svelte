<script lang="ts">
  import { clsx } from 'clsx';

  import Skeleton from '../../common/Skeleton';
  import { getCodeLikeBlockContext } from '../CodeLikeBlock';

  import styles from './GoogleMap.module.scss';

  export let address: string;
  export let title: string = '';

  let isLoaded = false;

  const context = getCodeLikeBlockContext();
</script>

<div
  class={clsx(styles.googleMap, isLoaded && styles.loaded, $$restProps.class)}
  style:--line-height="{$context.lineHeight}px"
>
  {#if !isLoaded}
    <Skeleton class={clsx(styles.block, styles.skeleton)} />
  {/if}
  <iframe
    class={clsx(styles.block, styles.iframe)}
    {title}
    width="600"
    height="500"
    id="gmap_iframe"
    src={`https://maps.google.com/maps?q=${address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    on:load={() => (isLoaded = true)}
  ></iframe>
</div>

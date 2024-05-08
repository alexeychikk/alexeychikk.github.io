<script lang="ts">
  import LinkOpen from '../../components/common/LinkOpen';
  import CodeLikeBlock, {
    L,
    Kw,
    Sl,
    Fn,
    Br,
    Vn,
  } from '../../components/special/CodeLikeBlock';
  import GoogleMap from '../../components/special/GoogleMap';
  import { IS_HIRABLE } from '../../config/experience';

  import styles from './Contacts.module.scss';
</script>

<CodeLikeBlock>
  <L>
    Currently <Kw>I live</Kw> in <Vn>Kyiv</Vn>, <Sl>Ukraine</Sl>.
  </L>
  {#if IS_HIRABLE}
    <L active git="green">
      <Kw>But</Kw> I definitely consider <Fn>remote</Fn> work.
    </L>
  {:else}
    <L git="blue">
      I lived in <Sl>Israel</Sl> for several years, but decided to return back to
      Ukraine.
    </L>
  {/if}
  <Br />
  <div class={styles.mapWrapper}>
    <L class={styles.map}>
      <GoogleMap address="Kyiv" title="My Location" />
    </L>

    <div class={styles.contactInfo}>
      <L>
        E-mail:
        <LinkOpen to="mailto:alexdarkmm@gmail.com" external hasLinkIcon={false}>
          alexdarkmm@gmail.com
        </LinkOpen>
      </L>

      <L>
        LinkedIn:
        <LinkOpen to="https://www.linkedin.com/in/alex-zinkevych/" external>
          Alex Zinkevych
        </LinkOpen>
      </L>

      <L>
        GitHub:
        <LinkOpen to="https://github.com/alexeychikk" external>
          alexeychikk
        </LinkOpen>
      </L>

      <Br />

      <!-- <LoveSurvey /> -->
    </div>
  </div>
</CodeLikeBlock>

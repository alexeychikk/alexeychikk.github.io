<script lang="ts">
  import IconFolderSrcOpen from '../../assets/icons/folder-src-open.svg?component';
  import LinkOpen from '../../components/common/LinkOpen';
  import CodeLikeBlock, {
    L,
    Kw,
    Sl,
    Fn,
    Br,
    Vn,
    Cm,
  } from '../../components/special/CodeLikeBlock';
  import { IS_HIRABLE } from '../../config/experience';

  import styles from './AboutMe.module.scss';
</script>

<CodeLikeBlock>
  <L>
    <Kw>Hi</Kw>, my name is <Sl>Alex</Sl>!
  </L>
  <L>
    <Kw>I am</Kw> a <Fn>full-stack web developer</Fn>.
  </L>
  <L active git="green">
    {#if IS_HIRABLE}
      Currently I am <Sl>open</Sl> to new
      <Fn>job opportunities</Fn>!
    {:else}
      Currently I am not looking for a new job but feel free to
      <LinkOpen to="/contacts">contact</LinkOpen> me.
    {/if}
  </L>

  <Br />

  <L>
    <Kw>I love</Kw> to write <Vn>clean</Vn>, <Vn>readable</Vn> and
    <Vn>maintainable</Vn>
    <Fn>code</Fn>.
  </L>
  <L>
    My main <Fn>stack</Fn> is: <Vn>JavaScript / TypeScript</Vn>,
    <Vn>React</Vn>, <Vn>Node.js</Vn> and <Vn>MongoDB</Vn>.
  </L>
  <L>
    <Cm>I started coding when I was a teenager.</Cm>
  </L>
  <L>
    <Cm>My first programming language was C++.</Cm>
  </L>

  <Br />

  <L git="blue">
    <Kw>I have</Kw> extensive experience in building scalable
    <Fn>REST microservices</Fn> and <Fn>monolithic back-ends</Fn>, creating web
    <Fn>API integrations</Fn>, as well as developing responsive and efficient
    <Fn>front-end</Fn> web-applications, <Vn>refactoring</Vn> and
    <Vn>improving</Vn> existing codebases and even <Vn>migrating</Vn> them to a different
    technology stack / programming language.
  </L>

  <Br />

  <L>
    You can find all of my <Fn>skills</Fn> in the <Vn>sidebar</Vn> on the
    <Sl>left</Sl>
  </L>
  <L>
    (<Kw>swipe</Kw> or <Kw>tap</Kw> the <Sl>green folder</Sl>
    <IconFolderSrcOpen class={styles.icon} /> if you&apos;re using a
    <Fn>mobile device</Fn>).
  </L>
</CodeLikeBlock>

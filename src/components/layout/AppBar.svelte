<script lang="ts">
  import IconEmailOutline from 'svelte-material-icons/EmailOutline.svelte';
  import IconGithub from 'svelte-material-icons/Github.svelte';
  import IconLinkedIn from 'svelte-material-icons/Linkedin.svelte';
  import IconMenu from 'svelte-material-icons/Menu.svelte';
  import { Link } from 'svelte-routing';
  import IconFolderSrcOpen from '../../assets/icons/folder-src-open.svg?component';
  import Breadcrumbs from './Breadcrumbs.svelte';
  import Navigation from './Navigation.svelte';

  export let onSkillsDrawerOpen: (() => void) | undefined = undefined;
  export let onNavigationDrawerOpen: (() => void) | undefined = undefined;
</script>

<header class="app-bar">
  <nav class="toolbar">
    <div class="heading-wrapper">
      <IconFolderSrcOpen class="folder-icon" on:click={onSkillsDrawerOpen} />
      <h6 class="my-name">
        <Link to="/">Alex Zinkevych</Link>
      </h6>
      <a
        href="https://github.com/alexeychikk"
        target="_blank"
        rel="external nofollow"
      >
        <button aria-label="GitHub">
          <IconGithub />
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/alex-zinkevych/"
        target="_blank"
        rel="external nofollow"
      >
        <button aria-label="LinkedIn">
          <IconLinkedIn />
        </button>
      </a>
      <a href="mailto:alexdarkmm@gmail.com" target="_blank">
        <button aria-label="E-Mail">
          <IconEmailOutline />
        </button>
      </a>
      <button
        color="inherit"
        aria-label="open navigation drawer"
        on:click={onNavigationDrawerOpen}
      >
        <IconMenu />
      </button>
    </div>
  </nav>
  <Navigation />
  <Breadcrumbs />
</header>

<style lang="scss">
  @use 'src/assets/styles/theme';

  .app-bar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    background-color: theme.$color-bg-default;
  }

  .toolbar {
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    height: 46px;
    align-items: center;
  }

  .heading-wrapper {
    display: flex;
    align-items: center;
    color: #fff;
    line-height: 1;
    text-transform: uppercase;
  }

  .folder-icon {
    margin-right: 8px;
    cursor: pointer;
  }

  .my-name {
    margin-right: auto;
    font-weight: 700;
  }
</style>

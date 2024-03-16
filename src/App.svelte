<script lang="ts">
  import { Router, Route } from 'svelte-routing';

  import Redirect from './components/common/Redirect.svelte';
  import Layout from './components/layout/Layout.svelte';
  import AboutMe from './routes/AboutMe.svelte';
  import Contacts from './routes/Contacts.svelte';
  import Education from './routes/Education.svelte';
  import Experience from './routes/Experience.svelte';
  import Projects from './routes/Projects.svelte';

  export let url = '';
</script>

<Router {url}>
  <Layout>
    <Route path="/" component={AboutMe} />
    <Route path="/experience" component={Experience} />
    <Route path="/education" component={Education} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/projects" component={Projects} />
    <Route path="*"><Redirect /></Route>
  </Layout>
</Router>

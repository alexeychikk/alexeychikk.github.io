<script lang="ts">
  import { Router, Route } from 'svelte-routing';

  import Lazy from './components/common/Lazy';
  import Redirect from './components/common/Redirect';
  import Layout from './components/layout/Layout';

  export let url = '';
</script>

<Router {url}>
  <Layout>
    <Route path="/">
      <Lazy component={() => import('./routes/AboutMe')} />
    </Route>
    <Route path="/experience">
      <Lazy component={() => import('./routes/Experience')} />
    </Route>
    <Route path="/education">
      <Lazy component={() => import('./routes/Education')} />
    </Route>
    <Route path="/contacts">
      <Lazy component={() => import('./routes/Contacts')} />
    </Route>
    <Route path="/projects">
      <Lazy component={() => import('./routes/Projects')} />
    </Route>
    <Route path="*"><Redirect /></Route>
  </Layout>
</Router>

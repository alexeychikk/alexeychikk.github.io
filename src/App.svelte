<script lang="ts">
  import { Router, Route } from 'svelte-routing';

  import Redirect from './components/common/Redirect';
  import Layout from './components/layout/Layout';
  import AboutMe from './routes/AboutMe';
  import Contacts from './routes/Contacts';
  import Education from './routes/Education';
  import Experience from './routes/Experience';
  import Projects from './routes/Projects';

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

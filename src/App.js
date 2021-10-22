import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./layout/Layout";

import home from "./halaman/home";
import wardah from "./halaman/wardah/wardah";
import scarlett from "./halaman/scarlett/scarlett";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/home" exact component={home} />
          <Route path="/wardah" exact component={wardah} />
          <Route path="/scarlett" exact component={scarlett} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
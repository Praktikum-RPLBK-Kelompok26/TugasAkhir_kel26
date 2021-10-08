import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./layout/Layout";

import home from "./halaman/home";
import wardah from "./halaman/wardah/wardah";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/home" exact component={home} />
          <Route path="/wardah" exact component={wardah} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
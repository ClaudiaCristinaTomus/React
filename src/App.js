

import Layout from "./components/Layout";
import {Switch,Route} from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <About/>
        </Route>
        <Route path="/" exact>
          <Projects/>
        </Route>
        <Route path="/" exact>
          <Footer/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

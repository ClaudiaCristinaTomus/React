

import Layout from "./components/Layout";
import {Switch,Route} from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";


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
        
      </Switch>
    </Layout>
  );
}

export default App;

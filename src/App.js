import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Login from "../src/components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Login />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
//router allows to go between the pages with having them to reload

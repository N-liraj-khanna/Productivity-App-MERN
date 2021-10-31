import "./styles/app.scss";

// Import componenets
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="signup/" exact>
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

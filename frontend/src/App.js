import "./styles/app.scss";

// Import componenets
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Activities_List from "./components/Activities_List";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/activities" component={Activities_List} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

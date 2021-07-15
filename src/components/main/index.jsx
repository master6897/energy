import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import { PrivateRoute } from "../privateRoute";
import Navigation from '../navigation';
import Content from '../content';
import Login from '../login';
import Tasks from '../tasks';
import AddTask from "../tasks/add";

function App() {
  return (
    <Router>
      <div className="App">
      <Navigation />
      <Switch>
        <Route path='/' exact component={Tasks}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/addTask" component={AddTask}></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
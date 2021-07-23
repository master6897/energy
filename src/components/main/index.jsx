import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import { PrivateRoute } from "../privateRoute";
import Navigation from '../navigation';
import Login from '../login';
import Tasks from '../tasks';
import AddTask from "../tasks/add";
import Task from "../tasks/task";

function App() {
  return (
    <Router>
      <div className="App">
      <Navigation  path='/navigation'/>
      <Switch>
        <Route path='/' exact component={Tasks}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/addTask" component={AddTask}></Route>
        <Route path="/tasks/:id" exact component={Task}></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

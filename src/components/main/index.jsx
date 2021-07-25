import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Navigation from '../navigation';
import Login from '../login';
import Tasks from '../tasks';
import AddTask from "../tasks/add";
import Details from "../tasks/details";
import UserTasks from "../tasks/userTasks";

function App() {
  return (
    <Router>
      <div className="App">
      <Navigation  path='/navigation'/>
      <Switch>
        <Route path='/' exact component={Tasks}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/addTask" component={AddTask}></Route>
        <Route path="/details/:id" component={Details}></Route>
        <Route path="/userTasks" component={UserTasks}></Route>
        <Route path="/finishTask/:id" component={UserTasks}></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

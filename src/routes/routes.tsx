import { Route,Switch,BrowserRouter as Router } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Person from '../pages/Person/Person'


const Routes = () => {
  return(
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/:id" exact component={Person}/>
        </Switch>
    </Router>
  )
}

export default Routes
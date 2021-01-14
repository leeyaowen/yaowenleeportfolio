import { HashRouter as Router, Route, Switch} from "react-router-dom";
import About from "./components/About";
import WorkNanjenshan from './components/WorkNanjenshan'
import WorkBlender from './components/WorkBlender'
import Home from './Home';


function Routerapp() {
    return(
        <div className='router'>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/About' component={About} />
                    <Route path='/Work/Nanjenshan' component={WorkNanjenshan} />
                    <Route path='/Work/Blender' component={WorkBlender} />
                </Switch>                
            </Router>
        </div>
    );
}

export default Routerapp;
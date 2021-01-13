import { HashRouter as Router, Route, Switch} from "react-router-dom";
import About from "./components/About";
import Home from './Home';


function Routerapp() {
    return(
        <div className='router'>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/About' component={About} />                
                </Switch>                
            </Router>
        </div>
    );
}

export default Routerapp;
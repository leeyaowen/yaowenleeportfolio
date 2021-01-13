import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Host from "./components/Host";
import Home from './Home';


function Routerapp() {
    return(
        <div className='router'>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/Host' component={Host} />                
                </Switch>                
            </Router>
        </div>
    );
}

export default Routerapp;
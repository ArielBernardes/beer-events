import {Route,Switch} from 'react-router-dom';
import Confraternization from '../Pages/Confraternization';
import Graduation from '../Pages/Graduation';
import Home from '../Pages/Home';
import Wedding from '../Pages/Wedding';

const Routes = () => {
    return (
        <Switch>
            <Route exact path = '/'>
                <Home />
            </Route>
            <Route exact path = '/Wedding'>
                <Wedding />
            </Route>
            <Route exact path = '/Confraternization'>
                <Confraternization />
            </Route>
            <Route exact path = '/Graduation' >
                <Graduation />
            </Route>
        </Switch>
    )
}

export default Routes;
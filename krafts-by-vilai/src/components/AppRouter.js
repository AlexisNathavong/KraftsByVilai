import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { Menu } from 'semantic-ui-react';

//Components
import AboutPage from './AboutPage';
import HomePage from './HomePage';



const AppRouter = () => {


    return (

        <Router>  
            <div className='app-router'>
                <Link to='/'>Home</Link>
                <Link to='/aboutpage'>About</Link>
            </div>

            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/aboutpage' component={AboutPage} />
            </Switch>
        </Router>
    )
}


export default AppRouter;
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
            {/* <div class="ui menu">
                <div class="header item">
                    Our Company
                </div>
                <a class="item">
                    About Us
                </a>
                <a class="item">
                    Jobs
                </a>
                <a class="item">
                    Locations
                </a>
            </div> */}
            <div className='app-router'>
                <Link to='/'>Home</Link>
                <Link to='/about-page'>About</Link>
            </div>

            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about-page' component={AboutPage} />
            </Switch>
        </Router>
    )
}


export default AppRouter;
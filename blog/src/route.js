import React from 'react';

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default props => {
    return(
        <BrowserRouter>
            <Navbar 
            logo='Wellington' 
            links={
                [
                    {titulo: 'Home', redirect: '/'},
                    {titulo: 'Adicionar', redirect: '/admin'}
                ]
                }/>

            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/admin' component={Admin} />
            </Switch>
        </BrowserRouter>
        )
}
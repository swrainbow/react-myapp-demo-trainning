import React ,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import LoginPage from '../pages/LoginPage';

export default function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/user" component={UserPage}/>
            </Switch>
        </Router>
    )
}

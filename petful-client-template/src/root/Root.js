import React from 'react';
import {Route, Switch, Link } from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import Adoption from '../components/Adoption/Adoption';

class Root extends React.Component {
    render(){
    return <>
    <h1>
    <Link to='/'>
      Petful
    </Link>
    </h1>
    
    <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/adoption' component={Adoption} />
    </Switch>
      </>
  }
}


export default Root

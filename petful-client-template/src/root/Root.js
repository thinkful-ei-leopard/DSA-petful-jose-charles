import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Landing from '../components/Landing';
import Adoption from '../components/Adoption';

class Root extends React.Component {
    render(){
    return <>
    <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/adoption' component={Adoption} />
    </Switch>
      </>
  }
}


export default Root

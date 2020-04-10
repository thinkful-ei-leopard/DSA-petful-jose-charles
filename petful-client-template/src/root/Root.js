import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Landing from '../components/Landing'

class Root extends React.Component {
    render(){
    return <>
    <Switch>
    <Route exact path= '/' component = {Landing} />
    </Switch>
      </>
  }
}


export default Root

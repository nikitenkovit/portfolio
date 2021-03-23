import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from "../../const";
import HomeScreen from "../home-screen/home-screen";
import AboutScreen from "../about-screen/about-screen";

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.HOME} component={HomeScreen}/>
      <Route exact path={AppRoute.ABOUT} component={AboutScreen}/>
    </Switch>
  );
};

export default App;

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from "../../const";
import HomeScreen from "../home-screen/home-screen";
import AboutScreen from "../about-screen/about-screen";
import PortfolioScreen from "../portfolio-screen/portfolio-screen";
import ContactsScreen from "../contacts-screen/contacts-screen";

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.HOME} component={HomeScreen}/>
      <Route exact path={AppRoute.ABOUT} component={AboutScreen}/>
      <Route exact path={AppRoute.PORTFOLIO} component={PortfolioScreen}/>
      <Route exact path={AppRoute.CONTACTS} component={ContactsScreen}/>
    </Switch>
  );
};

export default App;

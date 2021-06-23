import React, {useState} from 'react';
import {Context} from "../../context";
import {Switch, Route} from 'react-router-dom';
import {AppRoute, Language} from "../../const";
import HomeScreen from "../home-screen/home-screen";
import AboutScreen from "../about-screen/about-screen";
import PortfolioScreen from "../portfolio-screen/portfolio-screen";
import ContactsScreen from "../contacts-screen/contacts-screen";

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState(Language.En);

  return (
    <Context.Provider value={[currentLanguage, setCurrentLanguage]}>
      <Switch>
        <Route exact path={AppRoute.HOME} component={HomeScreen}/>
        <Route exact path={AppRoute.ABOUT} component={AboutScreen}/>
        <Route exact path={AppRoute.PORTFOLIO} component={PortfolioScreen}/>
        <Route exact path={AppRoute.CONTACTS} component={ContactsScreen}/>
      </Switch>
    </Context.Provider>
  );
};

export default App;

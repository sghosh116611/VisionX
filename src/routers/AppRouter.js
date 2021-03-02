import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from "../components/Header";
import Homepage from "../screens/Homepage";
import Courses from "../screens/Courses";
import Contact from "../screens/Contact";
import AboutUs from "../screens/AboutUs";
import NotFoundPage from "../screens/NotFoundPage";
import Footer from '../components/Footer';

export const history = createHistory();

const AppRouter = () => (
  <Router history = {history}>
    <div className="AppRouter">
      <Header/>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/about" exact component={AboutUs} />
        <Route path="/contact" exact component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer/>
    </div>
  </Router>
);

export default AppRouter;

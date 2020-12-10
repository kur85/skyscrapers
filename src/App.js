import React from 'react';
import './App.scss';
import Homepage from './components/homepage/home';
import NotFound from './components/notFound/notFound';
import SkyscraperPage from './components/skyscraperpage/skyscraperPage';
import Maps from './components/maps/maps'
import Cities from './components/cities/cities'

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink,
  Router,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/">
        <Homepage/>
      </Route>
      <Route path="/skyscraper/:id" component={SkyscraperPage}/>
      <Route path="/mapa" component={Maps}/>
      <Route path="/miasta" component={Cities}/>
      <Route path="*" component={NotFound} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

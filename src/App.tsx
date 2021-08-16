import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AsmodeusTheme } from './theme';
import { Banner } from './components/molecules';
import { MainContainer } from './components/atoms';
import Routes from './routes';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <ThemeProvider theme={AsmodeusTheme}>
      <MainContainer>
        <Banner />Î
        <Switch>
          <Route path={Routes.home}>
            <div></div>
          </Route>
          <Route path={Routes.products}>
            <div></div>
          </Route>
          <Route path={Routes.category}>
            <div></div>
          </Route>
        </Switch>
      </MainContainer>
      </ThemeProvider>
    </Router>
  );
}

export default App;

import React from 'react';
//Components pages
import Home from './pages/home';
//import styled components
import GlobalStyle from './components/GlobalStyles';
import Nav from './components/Nav';
//import route
import {Route} from 'react-router-dom';
import Darkmode from "darkmode-js";


const options = {
  label: '🌓',
}
const darkmode = new Darkmode(options);
darkmode.showWidget();

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <Nav />
        <Route path={['/game/:id', '/']}>
          <Home />
        </Route>
    </div>
  );
}

export default App;
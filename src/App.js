import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <div>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path={["/react-portfolio", "/react-portfolio/about"]}>
            <About />
          </Route>
          <Route exact path="/react-portfolio/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </HashRouter>
      <Footer />
    </div>

  );
}

export default App;

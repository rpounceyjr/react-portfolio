import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path={["/react-portfolio", "/react-portfolio/about"]}>
            <About />
          </Route>
          <Route exact path="/react-portfolio/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/about"]}>
            <About
              children="Welcome!" />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;

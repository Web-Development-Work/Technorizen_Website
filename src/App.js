import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './components/NavBar/Index';
import About from "./pages/about";
import Services from "./pages/services";
import Technology from "./pages/technology";
import Solution from "./pages/solution";
import Product from "./pages/product";
import Gallery from "./pages/gallery";
import Portfolio from "./pages/portfolio";
import Career from "./pages/career";
import Contactus from "./pages/contactus";
import NavigationMenu from "./pages/Navigationmenu";
import Footer from "./pages/Footer";
import Productdetail from './pages/productdetail';
import Error from './pages/Error404';

function App() {
    return (
      <div className="App">
      <Router>
        <NavigationMenu/>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path='/About' exact component={()=><About/>} />
            <Route path='/Services' exact component={()=><Services/>} />
            <Route path='/Technology' exact component={()=><Technology/>} />
            <Route path='/Solution' exact component={()=><Solution/>} />
            <Route path='/Products' exact component={()=><Product/>} />
            <Route path='/Gallery' exact component={()=><Gallery/>}/>
            <Route path='/Portfolio' exact component={()=><Portfolio/>}/>
            <Route path='/Career' exact component={()=><Career/>}/>
            <Route path='/ContactUs' exact component={()=><Contactus/>}/>
            <Route path="/Productdetail" exact component={()=><Productdetail/>}/>
            <Route path="/Error" exact component={()=><Error/>}/>
          </Switch>
        <Footer />
      </Router>
      </div>
      );
  }

export default App;

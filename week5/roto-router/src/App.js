import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
function App()  {
    let styles = {    textAlign:"center", }
    
    return(
        <div styles={styles}>
        <h1> Really Amazing Plumbing </h1>
        <Navbar />

        <Switch>
            <Route exact path ="/">
            <div>
                
            </div>
                {/* <Home /> */}
            </Route>
            <Route exact path ="About"> */}
                {/* <About /> */}
            </Route>
            <Route exact path ="Contact">
                {/* <Contact /> */}
            </Route>
            <Route exact path ="Services">
                {/* <Services /> */}
            </Route>
        </Switch>

        <Footer />

        </div>
    );
 }
    
export default App;


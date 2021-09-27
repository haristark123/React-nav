import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Demo from "./components/Demo";
import Home from "./components/Home";
import KeyFeatures from "./components/KeyFeatures";
import pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" component={KeyFeatures} />
          <Route path="/pricing" component={pricing} />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/demo" component={Demo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

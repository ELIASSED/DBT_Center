import "./App.css";
import GlobalStyle from "./globalStyle";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components";
import Home from "./pages/HomePage/Home";
import DBT from "./pages/DbtPage/DBT";
import Therapy from "./pages/TherapyPage/Therapy";
import Team from "./pages/TeamPage/Team";
import Services from "./pages/ServicesPage/Services";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dbt" exact component={DBT} />
          <Route path="/therapy" exact component={Therapy} />
          <Route path="/therapists" exact component={Team} />
          <Route path="/contact" exact component={Services} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

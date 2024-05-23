import "./App.css";
import GlobalStyle from "./globalStyle";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components";
import Home from "./pages/HomePage/Home";
import DBT from "./pages/DbtPage/DBT"
import DBT1 from "./pages/DbtPage/DBT1";
import DBT2 from "./pages/DbtPage/DBT2";
import DBT3 from "./pages/DbtPage/DBT3";
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
          <Route path="/dbt/#section1" exact component={DBT1} />
          <Route path="/dbt/#section2" exact component={DBT2} />
          <Route path="/dbt/#section3" exact component={DBT3} />
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

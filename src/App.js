import "./components/Sass/Style.scss";
import RedColor from "./components/Pages/RedColor";
import BlueGrey from "./components/Pages/BlueGrey";
import Amber from "./components/Pages/Amber";
import Blue from "./components/Pages/Blue";
import Brown from "./components/Pages/Brown";
import Cyan from "./components/Pages/Cyan";
import DeepOrange from "./components/Pages/DeepOrange";
import DeepPurple from "./components/Pages/DeepPurple";
import Green from "./components/Pages/Green";
import Grey from "./components/Pages/Grey";
import Indigo from "./components/Pages/Indigo";
import LightGreen from "./components/Pages/LightGreen";
import LightBlue from "./components/Pages/LignBlue";
import Pink from "./components/Pages/Pink";
import Purple from "./components/Pages/Purple";
import Teal from "./components/Pages/Teal";
import Limit from "./components/Pages/Limit";
import Yellow from "./components/Pages/Yellow";
import Orange from "./components/Pages/Orange";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/red" component={RedColor} exact />
        <Route path="/BlueGrey" component={BlueGrey} exact />
        <Route path="/Amber" component={Amber} exact />
        <Route path="/Blue" component={Blue} exact />
        <Route path="/Brown" component={Brown} exact />
        <Route path="/Cyan" component={Cyan} exact />
        <Route path="/DeepOrange" component={DeepOrange} exact />
        <Route path="/DeepPurple" component={DeepPurple} exact />
        <Route path="/Green" component={Green} exact />
        <Route path="/Grey" component={Grey} exact />
        <Route path="/Indigo" component={Indigo} exact />
        <Route path="/LightGreen" component={LightGreen} exact />
        <Route path="/LightBlue" component={LightBlue} exact />
        <Route path="/Pink" component={Pink} exact />
        <Route path="/Purple" component={Purple} exact />
        <Route path="/Teal" component={Teal} exact />
        <Route path="/Limit" component={Limit} exact />
        <Route path="/Yellow" component={Yellow} exact />
        <Route path="/Orange" component={Orange} exact />
      </Switch>
    </div>
  );
}

export default App;

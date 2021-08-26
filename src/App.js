import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import WrongUrl from './Components/WrongUrl/WrongUrl';
import Teams from './Components/Teams/Teams';
import TeamDetails from './Components/TeamDetails/TeamDetails';



function App() {




  return (
    <div>

      <Router>
        <Switch>

          <Route exact path="/">
            <Header></Header>
            <Teams></Teams>
          </Route>

          <Route path="/home" >
            <Header></Header>
            <Teams></Teams>
          </Route>

          <Route path="/teamDetails/:leagueId" >
            <TeamDetails></TeamDetails>
          </Route>

          <Route path="*">
            <WrongUrl></WrongUrl>
          </Route>

        </Switch>
      </Router>



    </div>
  );
}

export default App;

import { Switch,BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Start from "./pages/Start.jsx";
import Home from "./pages/Home.jsx";
// import CreatePokemon from "./pages/CreatePokemon";
// import PokemonDetail from "./pages/PokemonDetail";
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/create">
          </Route>
          <Route path='/details'>
          </Route>
        </Switch>
    
    </Router>
    </div>



  );
}

export default App;
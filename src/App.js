import Pokemon_List from "./containers/Pokemon_List";
import MyPokemon from "./containers/MyPokemon";
//import Coba from "./containers/Coba";
import Pokemon_Detail from "./containers/Pokemon_Detail";
import Navig from "./components/Nav";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
      	<Navig/>
      		<Switch>
	        	<Route path="/" component={Pokemon_List} exact />
	        	<Route path="/pokemon/:name" component={Pokemon_Detail} exact />
            <Route path="/mypokemon" component={MyPokemon} exact />
        	</Switch>
      </div>
    </Router>
  );
}

export default App;

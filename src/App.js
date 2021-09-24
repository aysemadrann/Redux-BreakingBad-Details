import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes'

function App() {
  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Characters</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/char/:char_id'>
            <Detail/>
          </Route>
          <Route path='/quotes'>
            <Quotes/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

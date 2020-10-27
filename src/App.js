import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ReactLazy from './components/reactLazy'
import Context from './components/context/Context'
import LimitBoundary from './components/errorLimits/ErrorLimit'
import RenderProps from './components/renderProps/RenderProps'
import EncapsuledRenderProps from "./components/renderProps/EncapsuledRenderProps"


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to = "/reactLazy">React Lazy</Link>
        <Link to = "/context">Context</Link>
        <Link to = "/limitboundary"> Limit Boundary</Link>
        <Link to = "/renderprops"> Render Props </Link>
        <Link to = "/encapsuledrenderProps"> Encapsuled Render Props</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Switch>

        <Route exact path = "/reactLazy" component = {ReactLazy}/> 
        <Route exact path = "/context" component = {Context}/> 
        <Route exact path = "/limitboundary" component = {LimitBoundary}/>
        <Route exact path = "/renderprops" component = {RenderProps}/>
        <Route exact paht = "/encapsuledrenderprops" component = {EncapsuledRenderProps}/>
      </Switch>
    </div>

    </Router>
  );
}

export default App;

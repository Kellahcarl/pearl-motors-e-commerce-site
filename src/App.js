import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.css';
import Home from "./components/Home";
import About from "./components/About";
import Cart from './components/Cart';
import CarDescription from './components/CarDescription';

function App() {
  return (
<Router>
    
    <div className="App">
   
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch className='App'>
        <Route className='path' exact path="/" component={Home}/>
            
        <Route className='path' path="/about" component={About}/>
          
        <Route className='path' path="/cart" component={Cart}/>

        <Route className="path" path='/description' component ={CarDescription}/>
          
      </Switch>
    </div>
  </Router>
  );
}

export default App;

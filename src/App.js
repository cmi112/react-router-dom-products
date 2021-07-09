
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"

import Home from "./component/Home"
import About from "./component/About"
import Products from "./component/Products"
import Item from "./component/Item"
import "../src/styles/App.css"

function App() {
  return (
    <Router>

    <div className="App">
    <Link to ="/" >Home</Link>
      <Link to ="/about" >About</Link>
      <Link to ="/product" >Product</Link>

      <Switch>

      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/product" exact component={Products}/>
      <Route path="/product/:id" component={Item}/>
      </Switch>

      
    </div>
    </Router>
  );
}


export default App;


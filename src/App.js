
import './App.css';
import NavBar from './Components/NavBar'
import About from './Components/About'
import Home from './Components/Home'
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route>
            {()=><h1>404: Page Not Found</h1>}
          </Route> 
        </Switch>
      </main>
    </div>
  )
}
export default App;

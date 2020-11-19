import "./App.css";
import { Router } from "@reach/router";
import Landing from './pages/Landing'
const  App=() =>(
  <Router>
    <Landing path="/"></Landing>
  </Router>
)

export default App;

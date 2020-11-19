import "./App.css";
import { Router } from "@reach/router";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => (
  <div>
    <Header />
    <Navbar />
    <Router>
      <Landing path="/"></Landing>
    </Router>
    <Footer />
  </div>
);

export default App;

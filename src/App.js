import "./App.css";
import { Router } from "@reach/router";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageByID from "./pages/ImageByID";
import UpdateByID from "./pages/UpdateByID";
import AddFamilyImage from "./pages/AddFamilyImage";
import FamilyTodo from "./pages/FamilyTodo";
import AddTodoFamily from "./pages/AddTodoFamily";
import UpdateTodoFamily from "./pages/UpdataTodoFamily";
const App = () => (
  <div>
    <Header />
    <Navbar />
    <Router>
      <Landing path="/"></Landing>
      <ImageByID path="/img/:id"></ImageByID>
      <UpdateByID path="/update/:id"></UpdateByID>
      <AddFamilyImage path="/addimg"></AddFamilyImage>
      <FamilyTodo path="/todo"></FamilyTodo>
      <AddTodoFamily path="/todo/add"></AddTodoFamily>
      <UpdateTodoFamily path="/todo/update/:id"></UpdateTodoFamily>
    </Router>
    <Footer />
  </div>
);

export default App;

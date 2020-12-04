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
import { AuthProvider } from "./context/authContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
const App = () => (
  <div className="app__container">
    <AuthProvider>
      <Header />
     
      <Router>
        <PrivateRoute exect as={Landing} path="/" />
        <Signup path="/signup"></Signup>
        <Login path="/login"></Login>
        <Landing path="/"></Landing>
        <ImageByID path="/img/:id"></ImageByID>
        <UpdateByID path="/update/:id"></UpdateByID>
        <AddFamilyImage path="/addimg"></AddFamilyImage>
        <FamilyTodo path="/todo"></FamilyTodo>
        <AddTodoFamily path="/todo/add"></AddTodoFamily>
        <UpdateTodoFamily path="/todo/update/:id"></UpdateTodoFamily>
      </Router>
      <Footer />
    </AuthProvider>
  </div>
);

export default App;

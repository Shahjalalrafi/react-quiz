import "../styles/App.css"
import Layout from './Layout';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Results";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";


function App() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/result" component={Result} />
        </Layout>
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;

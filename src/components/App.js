import "../styles/App.css"
import Layout from './Layout';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Signup /> */}
      <Login />
    </Layout>
  );
}

export default App;

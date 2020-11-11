import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { FetchProvider } from "./contexts/FetchContext";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "./App.css";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <FetchProvider>
          <ThemeProvider>
            <AppRoutes />
          </ThemeProvider>
        </FetchProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

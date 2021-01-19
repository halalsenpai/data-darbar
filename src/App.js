import Infos from "./components/layout/Info/Infos";
import CreateInfos from "./components/layout/Info/CreateInfos";
import Navbar from "./components/layout/Navbar";
import "./styles/App.scss";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditInfo from "./components/layout/Info/EditInfo";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Infos} />
                <Route exact path="/CreateData" component={CreateInfos} />
                <Route exact path="/EditData/:id" component={EditInfo} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

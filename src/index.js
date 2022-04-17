import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import Home from "./components/homePage/home";
import TimeRecordList from "./components/timeRecord/TimeRecordList";
import "bootstrap/dist/css/bootstrap.min.css";
import DataAdd from "./components/timeRecord/DataAdd";
import EditData from "./components/timeRecord/EditData";
class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Provider store={store}>
          <React.StrictMode>
            <Switch>
              <Route exact path="/" component={TimeRecordList} />
              <Route exact path="/add" component={DataAdd} />
              <Route exact path="/edit" component={EditData} />
            </Switch>
          </React.StrictMode>
        </Provider>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Root />, document.getElementById("root"));

// serviceWorker.unregister();

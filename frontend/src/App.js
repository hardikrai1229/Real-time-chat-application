import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom"; // Import Route and Switch from react-router-dom
import Homepage from "./pages/Homepage"; // Assuming Homepage is the correct component exported from './pages/homepage'
import Chatpage from "./pages/Chatpage"; // Assuming Chatpage is the correct component exported from './pages/chatpage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/chats" component={Chatpage} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import Chat from "containers/Chat";

import { hot } from "react-hot-loader";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Chat />
      </div>
    );
  }
}

export default hot(module)(App);

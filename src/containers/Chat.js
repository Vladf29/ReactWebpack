import React from "react";

import store from "store/index";
import { Provider } from "react-redux";

import "styles/Chat.scss";

import PeopleList from "containers/PeopleList";
import MessagesList from "containers/MessagesList";

window.store = store;

export default class Chat extends React.Component {
  render() {
    return (
      <Provider key={Date.now()} store={store}>
        <div className="container clearfix">
          <PeopleList />
          <MessagesList />
        </div>
      </Provider>
    );
  }
}

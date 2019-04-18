import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./streams/SteamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamCreate from "./streams/StreamCreate";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

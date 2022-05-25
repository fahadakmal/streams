import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import StreamShow from "./Streams/StreamShow";
import StreamList from "./Streams/StreamList";
import StreamEdit from "./Streams/StreamEdit";
import Header from "./Header";
function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <StreamList />
          </Route>
          <Route path="/streams/new" exact>
            <StreamCreate />
          </Route>
          <Route path="/streams/delete" exact>
            <StreamDelete />
          </Route>
          <Route path="/streams/show" exact>
            <StreamShow />
          </Route>
          <Route path="/streams/edit" exact>
            <StreamEdit />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

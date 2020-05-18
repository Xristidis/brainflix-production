import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Upload from "./pages/upload/Upload";

const apiKey = "?api_key=<c7956832-c973-4faf-a93c-e8e1672bf6ae>";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/upload" component={Upload} />
          <Route path="/videos/:videoId" component={Homepage} />
          {/* above will now give video data to component  */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;

import React from "react";
import "./App.css";
import { withSuspense } from "./components/withSuspense";
import { BrowserRouter, Route } from "react-router-dom";

const LazyComp = React.lazy(() => import("./components/LazyComp"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" render={withSuspense(LazyComp)} />
      </div>
    </BrowserRouter>
  );
}

export default App;

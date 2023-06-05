import React from "react";
import Navbar from "./components/Navbar";

import data from "./FakeData.js";

function App() {
  return (
    <div className="App">
      <Navbar data={data}/>
    </div>
  );
}

export default App;

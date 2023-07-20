import React, { useState } from "react";
import Calculator from "./Components/Calculator";

import "./styles/black.css";
import "./styles/white.css";

function App() {
  const [changeTheme, setChangeThem] = useState(false);

  return (
    <div className={"App " + (changeTheme ? "white" : "black")}>
      <div className="container">
        <Calculator currentTheme={changeTheme} setTheme={setChangeThem} />
      </div>
    </div>
  );
}

export default App;

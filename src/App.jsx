import "./App.css";

import { useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LandingPage></LandingPage>
    </>
  );
}

export default App;

import NavBar from "./Components/NavBar";
import { ProfileCard } from "./Components/ProfileCard";

import { 
  Container 
} from "@chakra-ui/react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Pages/Home";
import Hello from "./Pages/Hello";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      {/* FIXME: 後で Routes.js とかに書き出す */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello/>} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;

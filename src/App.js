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
import Wiki from "./Pages/Wiki"

const NavBarContents = [
  {
    key: 'root',
    name: 'root',
    link: '/',
  },
  {
    key: 'hello',
    name: 'hello',
    link: '/hello/',
  },
  {
    key: 'wiki',
    name: 'wiki',
    link: '/wiki/',
  },
]

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar contents={NavBarContents} />
        {/* FIXME: 後で Routes.js とかに書き出す */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello/>} />
          <Route path="/wiki" element={<Wiki/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;

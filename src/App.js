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
import AuthProvider from "./api/Auth";

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
      <AuthProvider>
        <Router>
          <NavBar contents={NavBarContents} />
          {/* FIXME: 後で Routes.js とかに書き出す */}
          <Routes>
            <Route path="/*">
              <Route path="home" element={<Home />} />
              <Route path="hello" element={<Hello/>} />
              <Route path="wiki" element={<Wiki/>}/>
            </Route>
          </Routes>
        </Router> 
      </AuthProvider>
    </div>
  );
}

export default App;

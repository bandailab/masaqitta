import NavBar from "./NavBar";
import { ProfileCard } from "./ProfileCard";

import { 
  Container 
} from "@chakra-ui/react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Container 
        bg={{ base: "red.200", sm: "yellow.200", md: "green.200", lg: "blue.200" }} 
        maxWidth={"container.xl"}
      >
        {/* FIXME: 後で Routes.js とかに書き出す */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Router> 
      </Container>
    </div>
  );
}

export default App;

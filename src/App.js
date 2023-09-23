import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ScrollToTop from "./utils/ScrollToTop";
import { NotFound } from "./utils/notFound";
import { NavBar } from "./components/navigation/navBar";

import { Assets } from "./pages/Assets";
import { PitchDeck } from "./pages/PitchDeck";
import { DynamicPitch } from "./pages/DynamicPitch";
import { Discover } from "./pages/Discover";

function App() {
  return (
    <Router>
      <NavBar />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route exact path="/" element={<PitchDeck />} />
        <Route exact path="/*" element={<NotFound />} />
        <Route exact path="/assets" element={<Assets />} />
        <Route exact path="/discover" element={<Discover />} />
        <Route path="in/:pitchUrl" element={<DynamicPitch />} />
      </Routes>
    </Router>
  );
}

export default App;

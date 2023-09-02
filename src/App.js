import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ScrollToTop from "./utils/ScrollToTop";
import { NotFound } from "./utils/notFound";
import { NavBar } from "./components/navigation/navBar";

import { Assets } from "./pages/Assets";
import { PitchDeck } from "./pages/PitchDeck";
import { DynamicPitch } from "./pages/DynamicPitch";

function App() {
  return (
    <Router>
      <NavBar />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route exact path="/" element={<PitchDeck />} />
        <Route exact path="/assets" element={<Assets />} />
        <Route path="in/:pitchUrl" element={<DynamicPitch />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

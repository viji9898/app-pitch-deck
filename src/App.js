import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ScrollToTop from "./utils/ScrollToTop";
import { NotFound } from "./utils/notFound";
import { NavBar } from "./components/navigation/navBar";
import { Footer } from "./components/navigation/footer";
import { Assets } from "./pages/Assets";
import { PitchDeck } from "./pages/PitchDeck";

function App() {
  return (
    <Router>
      <NavBar />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route exact path="/" element={<PitchDeck />} />
        <Route exact path="/assets" element={<Assets />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

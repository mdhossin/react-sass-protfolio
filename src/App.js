import "./App.scss";
import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Protfolio from "./components/Protfolio/Protfolio";
import Works from "./components/Works/Works";
import Testimonials from "./components/Testimoials/Testimonials";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu/MobileMenu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Protfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;

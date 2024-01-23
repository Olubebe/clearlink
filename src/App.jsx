import "./App.css";
import HeroSection from "./pages/HeroSection";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSection />} />
      </Routes>
    </>
  );
}

export default App;

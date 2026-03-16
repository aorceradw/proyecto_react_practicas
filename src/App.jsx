import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SobreMi from "./pages/Sobre-Mi";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trabajos" element={<Work />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

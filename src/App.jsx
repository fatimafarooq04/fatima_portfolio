// ✅ Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import PortfolioPage from "./components/portfolio/PortfolioPage";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { PortfolioDetail } from "./components/portfolio/PortfolioDetail";

// ✅ Home Page (without Sidebar)
export const HomePage = () => {
  return (
    <div className="main">

      <div className="container">
        <Sidebar />
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

// ✅ App with Global Sidebar
const App = () => {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route path="/PortfolioDetail/:id" element={<PortfolioDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

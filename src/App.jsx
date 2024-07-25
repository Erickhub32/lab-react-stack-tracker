import "./App.css";
import companies from './companies.json'
import technologies from './technologies.json'
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/company/:companySlug' element={<CompanyPage />} />
        <Route path='/tech/:slug' element={<TechnologyPage />} />

      </Routes>
    </div>
  );
}

export default App;

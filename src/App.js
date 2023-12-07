import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutUs from "./components/pages/AboutUs";
import TypePage from "./components/pages/TypePage";
import Email from "./components/organisms/Email";
import SearchPage from "./components/pages/SearchPage";
import PracticePage from "./components/pages/Practice";
import ListingPage from "./components/pages/ListingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/type" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<TypePage />} />
        <Route path="/search/articles" element={<ListingPage />} />
        <Route path="/search/:slug" element={<SearchPage />} />
        <Route path="/email" element={<Email />} />
        <Route path="/practice" element={<PracticePage />} />
      </Routes>
    </div>
  );
}

export default App;

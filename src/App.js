import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutUs from "./components/pages/AboutUs";
import TypePage from "./components/pages/TypePage";
import Email from "./components/organisms/Email";
import SearchPage from "./components/pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/type" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<TypePage />} />
        <Route path="/search/:slug" element={<SearchPage />} />
        <Route path="/email" element={<Email />} />
      </Routes>
    </div>
  );
}

export default App;

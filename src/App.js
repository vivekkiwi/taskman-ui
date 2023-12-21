import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutUs from "./components/pages/AboutUs";
import TypePage from "./components/pages/TypePage";
import Email from "./components/organisms/Email";
import SearchPage from "./components/pages/SearchPage";
import PracticePage from "./components/pages/Practice";
import ListingPage from "./components/pages/ListingPage";
import FeedsPage from "./components/pages/FeedsPage";
import routeConfig from "./apiServices/routeConfig";
import TestingPage from "./components/pages/TestingPage";

function App() {
  const {
    root,
    type,
    about,
    feeds,
    articles,
    search,
    email,
    practice,
    testing,
  } = routeConfig;

  return (
    <div className="App">
      <Routes>
        <Route path={type} element={<HomePage />} />
        <Route path={about} element={<AboutUs />} />
        <Route path={feeds} element={<FeedsPage />} />
        <Route path={root} element={<TypePage />} />
        <Route path={articles} element={<ListingPage />} />
        <Route path={search} element={<SearchPage />} />
        <Route path={email} element={<Email />} />
        <Route path={practice} element={<PracticePage />} />
        <Route path={testing} element={<TestingPage />} />
      </Routes>
    </div>
  );
}

export default App;

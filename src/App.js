import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import GalleryPage from "./pages/GalleryPage";
import NewsEvents from "./pages/NewsE";
import About from "./pages/about";
import ResourcesPage from "./pages/ResourcesPage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<NewsEvents />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/resources" element={<ResourcesPage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/team" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;

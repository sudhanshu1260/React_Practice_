import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Contact from "./Componets/Contact";
import Error from "./Componets/Error";
import Services from "./Componets/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/service" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

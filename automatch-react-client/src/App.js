import {Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Header from "./shared/Header";
import Faq from "./components/Faq";
import Form from "./components/Form";
import Home from "./components/Home";
import Howitworks from "./components/Howitworks";
import News from "./components/News";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Result from "./components/Result";

function App() {


  
  return (
    <div className="App">
      <Header />
      <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/form" element={<Form />} />
          <Route path="/howitworks" element={<Howitworks />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/result" element={<Result />} />
      </Routes>
  
    </div>
  );
}

export default App;

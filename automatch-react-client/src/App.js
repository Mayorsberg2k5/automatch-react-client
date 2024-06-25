import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
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
  const [searchResult, setSearchResult] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const navigate = useNavigate();

  const handleSearch = (result) => {
    setSearchResult(result);
    navigate('/result');
  };

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      localStorage.removeItem('isLoggedIn');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/form" element={<Form onSearch={handleSearch} isLoggedIn={isLoggedIn}/>} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onLogin={handleLogin} />} />
        <Route path="/result" element={<Result searchResult={searchResult} isLoggedIn={isLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
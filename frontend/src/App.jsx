import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Register from "./auth/Register";
import Login from "./auth/Login";

import ChooseLevel from "./level/ChooseLevel";
import OneWord     from "./level/OneWord";
import WordList    from "./level/WordList";
import SubLevel    from "./level/SubLevel";



import YouGlish from "./pages/YouGlish";

import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="bottom-right" testOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chooselevel" element={<ChooseLevel />} />
        <Route path="/sublevel/:level" element={<SubLevel />} />
        <Route path="/wordlist/:level/:sub" element={<WordList />} />
        <Route path="/oneword" element={<OneWord />} />
        <Route path="/youglish" element={<YouGlish />} />
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import NasilCalisir from "./pages/NasilCalisir";
import ChooseEnglishLevel from "./pages/ChooseEnglishLevel";
import Register from "../src/pages/Register";
import Login from "./pages/Login";
import WordList from "../src/pages/WordList";
import YourProgress from "./pages/YourProgress";

import axios from 'axios';
import { Toaster } from "react-hot-toast"


axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
        <Navbar />
        <Toaster position='bottom-right' testOptions={{duration: 2000}}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nasilcalisir" element={<NasilCalisir/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chooseenglishlevel" element={<ChooseEnglishLevel/>} />
          <Route path="/wordlist"  element={<WordList />} />
          <Route path="/yourprogress" element={<YourProgress />} />
        </Routes>
    </>
  );
}

export default App;

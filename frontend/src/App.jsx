import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import NasilCalisir from "./pages/NasilCalisir";
import ChooseLevel from "./pages/ChooseLevel";
import Register from "../src/pages/Register";
import Login from "./pages/Login";
import WordList from "../src/pages/WordList";
import SubLevel from "./pages/SubLevel";

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
          <Route path="/chooselevel" element={<ChooseLevel/>} />
          <Route path="/wordlist"  element={<WordList />} />
          <Route path="/sublevel" element={<SubLevel />} />
        </Routes>
    </>
  );
}

export default App;

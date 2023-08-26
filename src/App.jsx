import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
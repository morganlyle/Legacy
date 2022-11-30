import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Basics/Homepage.js';
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path='/' element={<Homepage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

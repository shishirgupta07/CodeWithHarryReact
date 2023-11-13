import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
   <>
   <Navbar title = "Hello I am TextUtils"/>
    <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextForm heading="TetUtils" />}/>
        <Route path="/about" element={<About />} />	
      </Routes>
    </BrowserRouter>  
    </div>
   </>
  );
}

export default App;

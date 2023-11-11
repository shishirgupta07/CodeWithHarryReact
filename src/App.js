import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
   <>
   <Navbar title = "Hello I am TextUtils"/>
   
   <div className="container" >
      <TextForm heading="Enter text" />
   </div>
   </>
  );
}

export default App;

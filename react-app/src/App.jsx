import './App.scss'
import Footer from './component/Footer/Footer';
import Json from './component/Json/Json';
import Main from './component/Main/Main';
import Navbar from './component/Navbar/Navbar';
import Todolist from './component/Todolist/Todolist';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/todolist' element={<Todolist/>}/>
          <Route path='/json' element={<Json/>} />
     </Routes>

     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;

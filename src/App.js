import logo from './logo.svg';
import './App.css';
import { Home } from './Component/Bill/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBill from "./Component/Create New Bill/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/addNew' element={<AddBill />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

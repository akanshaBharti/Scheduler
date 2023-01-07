import './App.css';
import Schedule from './Components/Schedule';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <div className="app app-dark bg-primary">
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
    <Route path = '/schedule' element={<Schedule/>}/>
    </Routes>
    </BrowserRouter>
  </div>)
}

export default App;

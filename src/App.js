import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from './components/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Succesful from './components/success';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/welcome' element={<Succesful />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

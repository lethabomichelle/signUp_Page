import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from './components/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

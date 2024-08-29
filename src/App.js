import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from './components/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Succesful from './components/success';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="1069819715876-vlq2eid8tb38jl0td6k7irm793ketard.apps.googleusercontent.com">...;
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/welcome' element={<Succesful />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;

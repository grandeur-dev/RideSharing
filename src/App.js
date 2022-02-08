import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import SignIn from './SignIn&Up/SignIn';
import SignUp from './SignIn&Up/SignUp';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
            <Route path='SignIn' element={<SignIn />} />
            <Route path='SignUp' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;

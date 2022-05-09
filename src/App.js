import './App.css';
import './index.js';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';


import { Component } from 'react';
import { LoginPage, Dashboard } from './pages';
import Facebook from './components/Facebook';
import Google from './components/Google';
import Linkedin from './components/Linkedin';
import SuccessPage from './SuccessPage';


const App =  () =>  {
  return (
    <Router>
      
      <div>
        {/* Routes */}
        <Routes>

          
          <Route path="/" element={<LoginPage/>} />
          <Route path="/success" element={<SuccessPage/>      } />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/google" element={<Google />} />
          <Route path="/linkedin" element={<Linkedin />} />
          <></>
          

        </Routes>


      </div>
    </Router>
  );
}


export default App;

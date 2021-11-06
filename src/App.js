import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Home from './pages/home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>  
      <div className="App">
        <GlobalStyles/>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />      
        </Routes>
      </div>
    </Router>
  );
}

export default App;

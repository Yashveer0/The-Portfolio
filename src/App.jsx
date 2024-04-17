import './App.css';


import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';



import Home from './pages/Home';
import Skills from './components/Skills';

import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skill" element={<Skills />} />
            
            {/* <Route path="/:user" element={<Home />} /> */}
        </Routes>
    </Router>

    
    );
}

export default App;

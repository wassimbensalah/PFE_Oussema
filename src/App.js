import './App.css';
import { Header } from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import EtagesForm from './pages/Etages/Form';


// const niveauxFields = [
//   { type: 'text', label: 'Niveaux', props: {} },
//   { type: 'autocomplete', props: {} }, 

// ];




function App() {


  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/etages" element={<EtagesForm />} />
        </Routes>
    </Router>
  );
}

export default App;

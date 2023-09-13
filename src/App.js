import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Mainpage from './pages/Mainpage/Mainpage';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Examples from './pages/Examples/Examples';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </div>
  );
}

export default App;

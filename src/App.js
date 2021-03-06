import { Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Examples from "./components/Examples";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/examples' element={<Examples />} />
      </Routes>
    </div>
  );
}

export default App;

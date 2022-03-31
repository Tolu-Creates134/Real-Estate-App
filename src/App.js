import { Header } from "./Header/Header";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from "./Home/Home";
import { Properties } from './Properties/Properties'


function App() {
  return (
    <Router>
      <Header/>
      <div className="real-estate">
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/properties' element={<Properties/>}/>
      </Routes>

      





      </div>
    </Router>
  );
}

export default App;

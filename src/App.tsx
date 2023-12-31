import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Emulator from './routes/Emulator';
import About from './routes/About';

export default function App() {
  return (
    <Router>
      <Header />

      <div>
        <Routes>
          <Route path="/" Component={Home}></Route>

          <Route path="/emulator" Component={Emulator}></Route>

          <Route path="/about" Component={About}></Route>
        </Routes>
      </div>
    </Router>
  );
}

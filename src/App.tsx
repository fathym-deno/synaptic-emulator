import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import About from './pages/about';

export default function App() {
  return (
    <Router>
      <Header />

      <div>
        <Routes>
          <Route path="/" Component={Home}></Route>

          <Route path="/about" Component={About}></Route>
        </Routes>
      </div>
    </Router>
  );
}

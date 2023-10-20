import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/home';
import About from './routes/about';

export default function App() {
  return (
    <Router>
      <Header />

      <div className="overflow-auto h-screen scrollbar-hide">
        <Routes>
          <Route path="/" Component={Home}></Route>

          <Route path="/about" Component={About}></Route>
        </Routes>
      </div>
    </Router>
  );
}

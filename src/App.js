import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FinanceManager from './components/FinanceManager/FinanceManager';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<FinanceManager />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

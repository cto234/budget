import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FinanceManager from './components/FinanceManager/FinanceManager';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/budget" element={<FinanceManager />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;


//For future reference, use routes for easy github deploy, be aware of path names
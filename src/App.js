import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
  return (
    <div>
        
        <Routes>
          <Route path="/register" element={<Register></Register>} />
          <Route path="/login" element={<Login></Login>} />
        </Routes>
    </div>
  );
}

export default App;

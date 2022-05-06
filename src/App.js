import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Header from './shared/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
        <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manageItems' element={
              <ManageItems></ManageItems>
        }></Route>
        <Route path='/addItem' element={
              <AddItem></AddItem>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
              <MyItems></MyItems>
          </RequireAuth>
        }></Route>


          <Route path="/register" element={<Register></Register>} > </Route>
          <Route path="/login" element={<Login></Login>} > </Route>

          <Route path="*" element={<NotFound></NotFound>}></Route>

        </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Inventories from './components/Inventories/Inventories';
import Login from './components/Login/Login';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
        <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manage_items' element={<ManageItems></ManageItems>}></Route>
        <Route path='/add_item' element={<AddItem></AddItem>}></Route>
        <Route path='/my_items' element={<MyItems></MyItems>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>

        <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>

        <Route path="/register" element={<Register></Register>} > </Route>
        <Route path="/login" element={<Login></Login>} > </Route>

        <Route path='/add_item' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>

        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/Blogs/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/blogs' element={<Blogs></Blogs>}></Route>
  <Route path='/about-me' element={<AboutMe></AboutMe>}></Route>
  <Route path='*' element={<NotFound></NotFound>}></Route>
</Routes>
<Footer></Footer>
    </div>
  );
}

export default App;

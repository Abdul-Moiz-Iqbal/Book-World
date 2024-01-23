import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  

  return (
   <div className=' '>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </div>
  );
}

export default App;

import './App.css';
import Navbar from './Partials/Navbar/Navbar';
import DocQA from './Pages/DocQA/DocQA';
import Cart from "./Pages/Cart/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App () {
  return (
    <>
        {/* <div className='container-fluid eui-yScroll'> */}
        <div className='app'>
          <Router>
          <Navbar />
          
            <Routes> 
            <Route path="/cart" element={<Cart />} />
              {/* <Route exact path="/" element={<Dashboard1/>} /> */}
              <Route exact path="/docqa" element={<DocQA />} />
            </Routes>
             {/* <NewsScroller/>  */}
          </Router>
        </div> 
        
    </>
  );
}

export default App;

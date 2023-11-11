import './App.css';
// import AdvancedSearch1 from "./Pages/AdvancedSearch1/AdvancedSearch1";
// import AdvancedSearch1 from "./Pages/AdvancedSearch/AdvancedSearch";
// import Intel471Page from './Pages/Intel471Page';
// import AdvancedSearch1 from "./Pages/AdvancedSearch1";
// import Dashboard1 from './Pages/Dashboard/Dashboard1';
// import LatestBreaches from './Pages/LatestBreaches/LatestBreaches';
// import LatestBreaches from './Pages/LatestBreaches/LatestBreaches1';
// import DataManagement from "./Pages/DataManagement1"
import Header from './Partials/Header/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import NewsScroller from './Partials/NewsScroller/NewsScroller';


function App () {
  return (
    <>
        {/* <div className='container-fluid eui-yScroll'> */}
        <div className='app'>
          <Router>
          <Header />
          
            <Routes> 
              {/* <Route exact path="/" element={<Dashboard1/>} />
              <Route exact path="/breaches" element={<LatestBreaches />} />
              <Route exact path="/latestBreaches" element={<Intel471Page />} />
              <Route exact path="/search" element={<AdvancedSearch1 />} />
                <Route path="/data" element={<DataManagement />} /> */}
                {/* <Route path="/user" element={<UserManagement />} />  */}
            </Routes>
            {/* <NewsScroller/> */}
          </Router>
        </div> 
        
    </>
  );
}

export default App;

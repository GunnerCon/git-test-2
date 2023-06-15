
import './App.css';
import Navigation from './components/Navigation';
import Players from './Players';
import Main from './components/Main';
import Footer from './components/Footer';
import Detail from './components/Detail';
//import PlayersPresentation from './components/PlayersPresentetion';
import{Routes,Route} from 'react-router-dom';
function App(){
  return(
    <div>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Players/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;




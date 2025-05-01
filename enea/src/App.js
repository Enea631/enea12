import logo from './logo.svg';
import './App.css';
import MainComp from './MainComp';
import CardComp from './CardComp';
import Navi from './Navi';
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import Event from './Event';
import UseSsatet from './UseSsatet';
import UseEffect from './UseEffect';
import Format from './Format';
import {Route, Routes} from 'react-router-dom'
import createItem from './CreateItem';


function App() {
  return (
    <div className="App">
      {/* <Navi/>
      <Format/> */}
   
   
     {/* <Event/> */}
      {/* <MainComp/>
      <CardComp/> */}
      {/* <UseSsatet/>
      <UseEffect/>
     */}
     <Routes>
     <Route path="/createItem/" element="createItem"/>
     <Route path="/readAllItem/" element="readAllItem"/>
     <Route path="/readOneItem/" element="readOneItem"/>
     <Route path="/updateItem/" element="updateItem"/>
     </Routes>
    </div>
  );
}
  
  export default App;
  



import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Components/Home'

function App(){
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Components/Home'
import SignIn from './Components/SignIn';

function App(){
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/signin" Component={SignIn}></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Components/Home'
import SignIn from './Components/SignIn';
import Profile from './Components/Profile'

function App(){
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/signin" Component={SignIn}></Route>
        <Route path="/profile" Component={Profile}></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;

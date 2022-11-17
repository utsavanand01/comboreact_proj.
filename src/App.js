import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './Components/Screens/AuthScreens/LoginScreen';
import RegisterScreen from './Components/Screens/AuthScreens/RegisterScreen';
import HomeScreen from './Components/HomeScreen';
import Appy4Admission from './Components/Screens/SplitScreens/Appy4Admission';

function App() {
  return (
    <>
      <Routes>
         <Route path='/' element={<HomeScreen/>} />
         <Route path='/login' element={<LoginScreen/>} />
         <Route path='/register' element={<RegisterScreen/>} />
         <Route path='/apply' element={<Appy4Admission/>} />
      </Routes>
    </>
  );
}

export default App;

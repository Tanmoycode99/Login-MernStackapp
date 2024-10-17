import Login from './components/Login'
import React from 'react'
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home  from './components/Home';
import RegisterForm from './components/RegisterForm';
import DigitalClock from './components/DigitalClock';
import PasswordLenErr from './components/PasswordLenErr';
import IncorrectUserPw from './components/IncorrectUserPw';


const App = () => {
  return (
    <>
   <div>
     <Login/>
     <DigitalClock/>   

     
    
      <Routes>
        <Route path="/invalidUsr" element={<IncorrectUserPw />} />
        <Route path="/pwLenErr" element={<PasswordLenErr />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>


    </div>  
   </>
  )
}

export default App




// import React from 'react';
// import './App.css';
// import { Route, Routes } from 'react-router-dom'; // Import BrowserRouter
// import Login from './components/Login';
// import Home from './components/Home'; // Assuming Home is a separate component
// import UserInvalid from './components/UserInvalid';

// const App = () => {
//   return (
   
//     <>
//     <div>
//     <Login />

//       <Routes>
//         <Route path="/home" element={<Home />} />
//       </Routes>
//       </div>
//       </>

//   );
// };

// export default App;

import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Pages/Login' 
import Homepage from './Pages/Homepage';

function App() {
  return (
   <Router>
    <Routes path='./' element={<Login/>}>
      <Route index element={<Login/>}/>
      <Route index element={<Homepage/>}/>
    </Routes>
   </Router>
  );
}

export default App;




// function App() {
//   return (
//     <>
//     <div>
//       <h1>Etutor</h1>
//       <Button variant='contained'>Register</Button>
//     </div>
//     <div className=''>
//       <img className='' src={image}/>
//     </div>
    
//      <div className='container'>
//       <div className='add-container'>

//       <form>
//         <h2 className='headline-text'>Log In</h2>

//         <label htmlFor='username'>Username</label>
//         <input type='text' name='username' id='uname'/>

//         <label htmlFor='password'>Password</label>
//         <input type='password' id='pass'/>
//         <span><div className='forgot-password'>Forgot Password?</div></span>
//         <Button className='btn btn-login' variant='contained'>Login</Button>
        
//       </form>
//       </div>
//      </div>
//   </>
//   );
// }

// export default App;

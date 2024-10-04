import { useState } from 'react';
import { X } from 'lucide-react';
import RegisterForm from './RegisterForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);


  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(false);
  };


  const onCloseLogin = () => {
    setShowLoginForm(false);
  };

  
  const handleRegisterClick = (e) => {
    e.preventDefault(); 
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };


  const handleSwitchToLogin = (e) => {
    e.preventDefault();
    setShowRegisterForm(false);
    setShowLoginForm(true);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

 
  const handleSubmitform = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:8000/login', { username, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
        
          setShowLoginForm(false);
          navigate('/home');
        }else{
          alert("Incorrect Username or Password")

        // Clear the form fields
        setUsername('');
        setPassword('');



        }
      })
      .catch(err => {
        console.error("Login error: ", err);
      });
  };

  return (
    <>
      <div>
   
        <button onClick={handleLoginClick} className='btn-1'>
          {showLoginForm || showRegisterForm ? 'Login' : 'Login'}
        </button>

  
        {showLoginForm && (
          <div className="login-container">
            <button className='close1' onClick={onCloseLogin}>
              <X />
            </button>
            <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={handleSubmitform}>
                <div>
                  <label htmlFor="username">Username:</label>
                  <input type="text"
                    id="username" 
                    name="username"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input type="password" 
                    id="password" 
                    name="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
              <p>
                Don't have an account? <a href="/register" onClick={handleRegisterClick}>Register</a>
              </p>
            </div>
          </div>
        )}

    
        {showRegisterForm && (
          <RegisterForm onClose={() => setShowRegisterForm(false)} onSwitchToLogin={handleSwitchToLogin} />
        )}
      </div>
    </>
  );
}

export default Login;








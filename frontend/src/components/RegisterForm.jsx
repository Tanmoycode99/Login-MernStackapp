import React, { useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';
import PasswordLenErr from './PasswordLenErr';
import RegistrationSuccess from './RegistrationSuccess';

function RegisterForm({ onClose, onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordLenErr, setShowPasswordLenErr] = useState(false);
  const [showRegSuccess, setShowRegSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setShowPasswordLenErr(true);
      setName('');
      setEmail('');
      setPassword('');
      return;
    }

    axios.post('http://localhost:8000/register', { name, email, password })
      .then(result => {
        console.log(result);
        setShowRegSuccess(true);
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(err => console.log(err));
  };

  const handleClosePasswordLenErr = () => {


    setShowPasswordLenErr(false);
  };

  const handleCloseRegistrationSuccess = () => {


    setShowRegSuccess(false);
    // onSwitchToLogin(); 
  };

  return (
    <>
      {showPasswordLenErr && (
        <PasswordLenErr onClose={handleClosePasswordLenErr} /> 
      )}

      {showRegSuccess && (
        <RegistrationSuccess onClose={handleCloseRegistrationSuccess} />
      )}

      {!showPasswordLenErr && !showRegSuccess && (
        <div className="register-container">
          <button className='close2' onClick={onClose}>
            <X />
          </button>
          <div className="register-form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit">Register</button>
            </form>

            <p>
              Already have an account?{' '}
              <a href="/login" onClick={onSwitchToLogin}>
                Login
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterForm;

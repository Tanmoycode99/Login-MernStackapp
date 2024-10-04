
import React, { useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';

function RegisterForm({ onClose, onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/register', { name, email, password })
      .then(result => {
        console.log(result);

        // Display alert for successful registration
        alert('Registration Successful!');

        // Clear the form fields
        setName('');
        setEmail('');
        setPassword('');

        // Optionally, switch to the login form after registration
        onSwitchToLogin();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="register-container">
      {/* Close button to close the registration form */}
      <button className='close2' onClick={onClose}>
        <X />
      </button>
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Input */}
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

          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Submit Button */}
          <button type="submit">Register</button>
        </form>

        {/* Link to switch to Login form */}
        <p>
          Already have an account?{' '}
          <a href="/login" onClick={onSwitchToLogin}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;


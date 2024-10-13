import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role set to 'student'
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form values for now (optional)
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role:', role);

    // Based on the selected role, redirect to the appropriate route
    if (role === 'student') {
      navigate('/student/interface');
    } else if (role === 'institute') {
      navigate('/institute/interface');
    } else if (role === 'driver') {
      navigate('/driver/StartRoute');
    }
  };

  return (
    <div className="user-login-container">
      <h1 className="login-title">User Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="login-input"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Dropdown for selecting role */}
        <select
          className="login-input"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="student">Student</option>
          <option value="institute">Institute</option>
          <option value="driver">Driver</option>
        </select>

        <button className="login-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserLogin;

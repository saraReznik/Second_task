import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5028/api/Auth/login', {
        email,
        password,
      });

      const token = response.data.token;
      login(token); 
    } catch (err) {
      console.error(err);
      setError('התחברות נכשלה. ודאי שהמייל והסיסמה נכונים.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4 text-center">התחברות</h2>
      <input
        type="email"
        placeholder="אימייל"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="סיסמה"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-3 p-2 border rounded"
        required
      />
      {error && <div className="text-red-600 mb-3">{error}</div>}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        התחברות
      </button>
    </form>
  );
};

export default LoginForm;

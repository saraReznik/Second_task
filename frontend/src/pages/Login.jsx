// import { useState } from 'react';
// import { loginRequest } from '../services/authService';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("הטופס נשלח");
//     try {
//       const token = await loginRequest(email, password);
//       login(token);
//       navigate('/'); // מעבר לעמוד הראשי
//     } catch (err) {
//       console.error(err);
//       setError('אימייל או סיסמה שגויים');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">התחברות</h2>
//         <input
//           type="email"
//           placeholder="אימייל"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           required
//         />
//         <input
//           type="password"
//           placeholder="סיסמה"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           required
//         />
//         {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           התחברות
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useState } from 'react';
import { loginRequest } from '../services/authService';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginRequest(email, password);
      login(token);
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('אימייל או סיסמה שגויים');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-right">
        <div className="flex justify-center mb-6 text-blue-600 text-4xl">
          <FaUser />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">התחברות למערכת</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">אימייל</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="example@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">סיסמה</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              required
            />
          </div>
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            התחברות
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

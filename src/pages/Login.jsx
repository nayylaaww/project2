import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate('/'))
      .catch((error) => alert(error.message));
  };

  return (
<div className="login-page">
  <div className="login-form">
    <button className="close-btn" onClick={() => navigate('/')}>🏠︎</button>
    <div className="tulisan-login-wrapper">
      <img src="/tulisan-login.png" alt="Login" className="tulisan-login" />
    </div>

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin}>Login</button>

    <p>Belum punya akun? <Link to="/Register">Daftar</Link></p>
  </div>
</div>

  );
};

export default Login;
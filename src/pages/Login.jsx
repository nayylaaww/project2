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
      .then(() => navigate('/pages/LandingPage'))
      .catch((error) => alert(error.message));
  };

  return (

<div className="login-page">
  <div className="login-form">
  <button className="close-btn" onClick={() => navigate('/')}>🏠︎</button>
    <div className="tulisan-login-wrapper">
      <img src="/tulisan-login.png" alt="Login" className="tulisan-login" />
    </div>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Login</button>
    <p>Belum punya akun? <a href="/Register">Daftar</a></p>
  </div>
</div>

  );
};

export default Login;
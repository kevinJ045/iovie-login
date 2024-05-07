import React, { useState } from 'react';
import { Cube } from './cube.tsx';
import { LoginBackground } from './bg.tsx';
import { MonotoneBg } from './monotone.tsx';
import { Button } from './button.tsx';
import './form.module.css'


const LoginForm = ({ onSubmit, types = [] as any[] }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [variant, setVariant] = useState('');
  const [register, setRegister] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      if (!password || !username || username.length < 4 || (
        register ? (!email || !variant) : false
      )) {
        if (!username) setError("Username  is required");
        else if (username.length < 4) setError("Username can&apos;t be less than");
        else if (!password) setError('Password is required');

        if (register && !email) setError('Email is required');
        else if (register && !variant) setError('You need to choose your variant.');
      } else {
        onSubmit(username, password, setRegister);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='login-page'>
      <div></div>
      <LoginBackground></LoginBackground>
      <div className="login-form">
        <div className="bg-glow"></div>
        <MonotoneBg></MonotoneBg>
        <div className="form">
          <h2>{register ? 'Create Account' : 'Login'}</h2>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          {
            register ? <div>
              <p>Choose your variant</p>
              <div style={{ display: 'flex' }}>
                {types.map(i => (
                  <div>
                    <Cube gloom={true} size={20} color={i.biome.colors[0]}></Cube>
                    <p>{i.biome.name || i.manifest.id}</p>
                  </div>
                ))}
              </div>
              <div>
                <input type="text" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
              :
              <div style={{ position: "relative", display: "flex", flexDirection: 'column' }} className='form-container'>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "start", position: "relative" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "20px", height: "20px", opacity: ".6", position: "absolute" }}>
                    <path fillRule="evenodd" d="M12 3.75a6.715 6.715 0 0 0-3.722 1.118.75.75 0 1 1-.828-1.25 8.25 8.25 0 0 1 12.8 6.883c0 3.014-.574 5.897-1.62 8.543a.75.75 0 0 1-1.395-.551A21.69 21.69 0 0 0 18.75 10.5 6.75 6.75 0 0 0 12 3.75ZM6.157 5.739a.75.75 0 0 1 .21 1.04A6.715 6.715 0 0 0 5.25 10.5c0 1.613-.463 3.12-1.265 4.393a.75.75 0 0 1-1.27-.8A6.715 6.715 0 0 0 3.75 10.5c0-1.68.503-3.246 1.367-4.55a.75.75 0 0 1 1.04-.211ZM12 7.5a3 3 0 0 0-3 3c0 3.1-1.176 5.927-3.105 8.056a.75.75 0 1 1-1.112-1.008A10.459 10.459 0 0 0 7.5 10.5a4.5 4.5 0 1 1 9 0c0 .547-.022 1.09-.067 1.626a.75.75 0 0 1-1.495-.123c.041-.495.062-.996.062-1.503a3 3 0 0 0-3-3Zm0 2.25a.75.75 0 0 1 .75.75c0 3.908-1.424 7.485-3.781 10.238a.75.75 0 0 1-1.14-.975A14.19 14.19 0 0 0 11.25 10.5a.75.75 0 0 1 .75-.75Zm3.239 5.183a.75.75 0 0 1 .515.927 19.417 19.417 0 0 1-2.585 5.544.75.75 0 0 1-1.243-.84 17.915 17.915 0 0 0 2.386-5.116.75.75 0 0 1 .927-.515Z" clipRule="evenodd" />
                  </svg>
                  <input style={{ padding: "0 0 0 28px", letterSpacing: "0.2rem" }} type="text" value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                </div>
                <span style={{ width: "100%", height: '2px', background: 'rgba(255, 255, 245, 0.089)' }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "start", position: "relative" }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "20px", height: "20px", opacity: ".6", position: "absolute" }}>
                    <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
                  </svg>
                  <input style={{ padding: "0 0 0 28px", letterSpacing: "0.2rem" }} type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
          }
          <Button onClick={handleLogin} color='#333333'>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

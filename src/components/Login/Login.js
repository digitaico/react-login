import React from 'react';
import './Login.css';

export default Login = () => {
  return(
    <div className="login-wrapper">
      <h1>Por favor ingresa</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </div>
  );
}

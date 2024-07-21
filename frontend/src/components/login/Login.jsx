import React from "react";

function Login() {
  return (
    <div>
      <h1>SmartClass</h1>
      <hr></hr>
      <div className="container">
        <div className="login-container">
      <h1 className="smart">Login</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
          
            required
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
        
      </div>
    </div>
  );
}

export default Login;

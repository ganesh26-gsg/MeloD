import { useState } from "react";
import Navbar from "./components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const Navigate=useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Navigate("/");
    alert(`Logged in as: ${username}`);
  };

  return (

   <>
   <Navbar/>
   <div className="LoginWrapper">
      <div className="LoginContainer">
        <h2 className="LoginTitle">Login</h2>
        <form onSubmit={handleSubmit} className="LoginForm">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="LoginInput"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="LoginInput"
          />
          <button type="submit" className="LoginButton">Login</button>
                    <Link to='/register'>
                    <p style={{color:"blue"}}>Register?</p>
                    </Link>
        </form>
      </div>
    </div>
   
   
   
   </>
  );
};

export default LoginPage;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://arudhra-f02e1-default-rtdb.firebaseio.com/register.json",
        {
          name,
          email,
          password,
          confirmPassword,
        }
      );

      alert("User Registered Successfully");
      console.log("Response:", response.data);
      
      // Navigate to login page after successful registration
      navigate("/login");
      
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="LoginWrapper">
        <div className="LoginContainer">
          <h2 className="LoginTitle">Register</h2>
          <form onSubmit={handleRegister} className="LoginForm">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="LoginInput"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="LoginInput"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="LoginInput"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="LoginInput"
            />
            <button type="submit" className="LoginButton">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

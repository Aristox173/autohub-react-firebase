// Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../controllers/userController.ts";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    isSupplier: true,
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await registerUser(userData);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register">
      <h1>Create Account</h1>
      <form onSubmit={handleAdd}>
        <label>Name</label>
        <input
          id="name"
          type="text"
          placeholder="User 1"
          onChange={handleInput}
        />
        <label>Email</label>
        <input
          id="email"
          type="email"
          placeholder="user1@email.com"
          onChange={handleInput}
        />
        <label>Password</label>
        <input
          id="password"
          type="password"
          placeholder="**********"
          onChange={handleInput}
        />
        <label htmlFor="isSupplier">Choose a role:</label>
        <select id="isSupplier" onChange={handleInput}>
          <option value="true">Supplier</option>
          <option value="false">Mechanic</option>
        </select>
        <button type="submit">Register User</button>
      </form>
      <button>
        <Link to="login">Login</Link>
      </button>
    </div>
  );
};

export default Register;

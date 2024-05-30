import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <h1>Create Account</h1>
      <form onSubmit="">
        <label>Name</label>
        <input id="userName" type="text" placeholder="User 1" onChange="" />
        <label>Email</label>
        <input
          id="userEmail"
          type="email"
          placeholder="user1@email.com"
          onChange=""
        />
        <label>Password</label>
        <input
          id="userPassword"
          type="password"
          placeholder="**********"
          onChange=""
        />
        <label htmlFor="isSupplier">Choose a role:</label>
        <select id="isSupplier" onChange="">
          <option value="supplier">Supplier</option>
          <option value="mechanic">Mechanic</option>
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

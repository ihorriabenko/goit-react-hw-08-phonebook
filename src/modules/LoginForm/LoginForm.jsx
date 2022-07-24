import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login(user))

    setUser({
      email: '',
      password: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        email
        <input onChange={handleChange} type="text" name="email" value={user.email} placeholder="email" required />
      </label>
      <label>
        password
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={user.password}
          placeholder="password"
          required
        />
      </label>
      <button>Log in</button>
    </form>
  );
};

export default LoginForm;

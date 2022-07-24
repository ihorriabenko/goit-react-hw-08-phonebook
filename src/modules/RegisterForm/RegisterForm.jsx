import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';

const RegisterForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(signup(user));

    setUser({
      name: '',
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
        name
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="name"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        email
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="email"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        password
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="password"
          required
          onChange={handleChange}
        />
      </label>
      <button>Register</button>
    </form>
  );
};

export default RegisterForm;

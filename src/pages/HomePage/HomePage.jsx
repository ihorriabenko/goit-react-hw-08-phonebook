import { NavLink } from 'react-router-dom';
import s from './home-page.module.scss';

const HomePage = () => {
  return (
    <div className="container">
      <div className={s.inner}>
        <h1 className={s.title}>
          PhoneBook app is an easy to use contact manager app that gives you
          facility of saving and viewing your contacts, so that you never lose
          your contacts.
        </h1>
      </div>
      <div className={s.secondary}>
        <NavLink className={s.link} to="/register">
          Register
        </NavLink>
        <NavLink className={s.link} to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;

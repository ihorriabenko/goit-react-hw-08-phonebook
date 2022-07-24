import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import s from './user-menu.module.scss'

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className={s.container}>
      <p>{name}</p>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
};

export default UserMenu;

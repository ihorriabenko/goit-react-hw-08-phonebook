import HeaderAuth from './HeaderAuth';
import HeaderMenu from './HeaderMenu';
import UserMenu from './UserMenu/UserMenu';
import useIsLogin from 'shared/hooks/useIsLogin';

const Header = () => {
  const isLogin = useIsLogin();

  return (
    <header>
      <div className="container">
        <div>
          {isLogin ? <UserMenu /> : <HeaderAuth />}
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;

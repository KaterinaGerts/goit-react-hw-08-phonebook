import s from './AppBar.module.css';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';


const AppBar = () => {
  return (
    <header style={s.header}>
      <Navigation />      
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
}

export default AppBar;
import s from './AppBar.module.css';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';


const AppBar = () => {
  return (
    <header className={s.header}>
      <Navigation /> 
      <AuthNav />      
      <UserMenu/>    
    </header>
  );
}

export default AppBar;
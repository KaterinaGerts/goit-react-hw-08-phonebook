import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/auth-selectors';
import {logOutUser} from 'redux/auth/auth-operations';
import defaultImg from 'helpers/default-img.png';
import s from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUsername);


  return (
    <div className={s.container}>
      <img src={defaultImg} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Welcome, {userName}</span>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Log out
      </button>
    </div>
  );
}

export default UserMenu;
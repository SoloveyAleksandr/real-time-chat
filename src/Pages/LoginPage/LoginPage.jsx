import { useContext } from 'react';
import { Context } from '../..';
import firebase from 'firebase/compat/app';

import styles from './LoginPage.module.css';
import Spiner from '../../components/Spiner/Spiner';

function LoginPage() {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  }

  return (
    <div className={styles.LoginPage}>
      <button
        className={styles.loginBtn}
        onClick={login} >Войти с помощью Google</button>
    </div>
  );
}

export default LoginPage;

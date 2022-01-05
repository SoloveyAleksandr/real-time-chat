import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../..';
import Container from '../Container/Container';
import DefaultBtn from '../DefaultBtn/DefaultBtn';

import styles from './Header.module.css';

function Header() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          {user ?
            <div>
              <span className={styles.username}>{user.displayName}</span>
              <DefaultBtn
                innerText='Выйти'
                handlClick={() => auth.signOut()} />
            </div>
            :
            <span>Аутентификация</span>
          }
        </div>
      </Container>
    </div>
  );
}

export default Header;

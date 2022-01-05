import { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../..';
import DefaultBtn from '../../components/DefaultBtn/DefaultBtn';
import Spiner from '../../components/Spiner/Spiner';
import firebase from 'firebase/compat/app';
import { v4 as uuid } from 'uuid';

import styles from './ChatPage.module.css';

function ChatPage() {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  );
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage('');
  }

  if (loading) {
    return <Spiner />
  }

  return (
    <div className={styles.ChatPage}>
      <div className={styles.messagesContainer}>
        {messages.map(message =>
          <div
            key={uuid()}
            className={user.uid === message.uid ?
              `${styles.messageItem} ${styles.myMessage}` :
              styles.messageItem}>
            <span className={styles.messageText}>
              {message.text}
            </span>
            <div className={styles.userImgContainer}>
              <img
                src={message.photoURL}
                className={styles.userImg} />
            </div>
          </div>
        )}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)} />
        <DefaultBtn
          innerText='Отправить'
          handlClick={sendMessage} />
      </div>
    </div>
  );
}

export default ChatPage;

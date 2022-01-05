import styles from './DefaultBtn.module.css';

function DefaultBtn({
  innerText,
  handlClick,
}) {
  return (
    <button
      className={styles.DefaultBtn}
      onClick={handlClick}>
      {innerText}
    </button>
  );
}

export default DefaultBtn;

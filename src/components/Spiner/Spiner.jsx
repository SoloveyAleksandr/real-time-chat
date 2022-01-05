import spiner from '../../images/spiner.gif';
import styles from './Spiner.module.css';

function Spiner() {
  return (
    <div className={styles.Spiner}>
      <img src={spiner} alt="spiner" />
    </div>
  );
}

export default Spiner;

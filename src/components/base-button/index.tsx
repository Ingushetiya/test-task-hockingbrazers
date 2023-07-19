import React from 'react';
import styles from './btn.module.scss';
const Btn = () => {
  return (
    <div className={styles.btn}>
      <input type="button" className={styles.btnBack} value="Back" />
      <input type="submit" className={styles.btnNext} value="Next" />
    </div>
  );
};

export default Btn;

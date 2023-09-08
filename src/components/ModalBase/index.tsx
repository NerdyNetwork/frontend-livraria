import { ReactNode } from 'react';

import styles from './styles.module.scss';

type ModalBaseProps = {
  onClose: () => void;
  children: ReactNode;
};

export const ModalBase = ({ onClose, children }: ModalBaseProps) => {
  const closeModalBase = () => {
    onClose();
  };

  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-content-column"]}>
          {children}
        </div>
        
        <div className={styles["header-content"]}>
          <button className={styles["close-button"]} onClick={closeModalBase}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

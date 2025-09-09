'use client';
import { Checkbox } from '@/components/ui/checkbox';
import styles from './index.module.css';

type ItemProps = {
  name: string;
  isCompleted: boolean;
  num: string;
  path: string;
};

const TrackClassItem: React.FC<ItemProps> = ({ name, isCompleted, num, path }) => {
  return (
    <div
      className={styles.containerItem}
      onClick={() => window.location.href = path}
    >
      <Checkbox
        className={
          isCompleted
            ? `${styles.checkbox} ${styles.checkboxChecked}`
            : styles.checkbox
        }
        checked={isCompleted}
        disabled
      />
      <a>
        Aula {num} - {name}
      </a>
    </div>
  );
};

export default TrackClassItem;

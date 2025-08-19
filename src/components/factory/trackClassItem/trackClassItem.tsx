'use client';
import { Checkbox } from '@/components/ui/checkbox';
import styles from './index.module.css';

type ItemProps = {
  name: string;
  isCompleted: boolean;
  num: string;
};

const TrackClassItem: React.FC<ItemProps> = ({ name, isCompleted, num }) => {
  return (
    <div
      className={styles.containerItem}
      onClick={() => console.log(`Clicked on ${name}`)}
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

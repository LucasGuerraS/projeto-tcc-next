import { Separator } from '@/components/ui/separator';
import styles from './index.module.css';

const DefaultHeader: React.FC = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.items}>
        <a className={styles.designpatternsfactory}>DesignPatternsFactory</a>
        <div className={styles.divider} />
        <a className={styles.home}>Home</a>
        <Separator orientation='vertical' className={styles.separator} />
        <a className={styles.home}>Profile</a>
      </div>
    </header>
  );
};

export default DefaultHeader;

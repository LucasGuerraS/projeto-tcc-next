import TrackClassItem from '../trackClassItem/trackClassItem';
import styles from './index.module.css';

type TrackClassBoxProps = {
  title: string;
  classesNames: string[];
  progress: number;
};

const TrackClassBox: React.FC<TrackClassBoxProps> = ({ title, classesNames, progress }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.titleDesc}>{progress}/3</p>
      </div>
      <div className={styles.classesBox}>
        <TrackClassItem
          name={classesNames[0]}
          isCompleted={progress > 0}
          num='1'
        />
        <TrackClassItem name={classesNames[1]} isCompleted={progress > 1} num='2' />
        <TrackClassItem name={classesNames[2]} isCompleted={progress > 2} num='3' />
      </div>
    </div>
  );
};

export default TrackClassBox;

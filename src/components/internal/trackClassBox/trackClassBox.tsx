import TrackClassItem from '../trackClassItem/trackClassItem';
import styles from './index.module.css';

type TrackClassBoxProps = {
  title: string;
  classesNames: string[];
  progress: number;
  track: string;
  numbers: number[];
};

const TrackClassBox: React.FC<TrackClassBoxProps> = ({ title, classesNames, progress, track, numbers }) => {
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
          path={`${track}/${numbers[0]}`}
        />
        <TrackClassItem name={classesNames[1]} isCompleted={progress > 1} num='2' path={`${track}/${numbers[1]}`} />
        <TrackClassItem name={classesNames[2]} isCompleted={progress > 2} num='3' path={`${track}/${numbers[2]}`} />
      </div>
    </div>
  );
};

export default TrackClassBox;

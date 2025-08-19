import TrackClassItem from '../trackClassItem/trackClassItem';
import styles from './index.module.css';

type TrackClassBoxProps = {
  title: string;
  classesNames: string[];
};

const TrackClassBox: React.FC<TrackClassBoxProps> = ({ title, classesNames  }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.titleDesc}>0/3</p>
      </div>
      <div className={styles.classesBox}>
        <TrackClassItem
          name={classesNames[0]}
          isCompleted={false}
          num='1'
        />
        <TrackClassItem name={classesNames[1]} isCompleted={true} num='2' />
        <TrackClassItem name={classesNames[2]} isCompleted={false} num='3' />
      </div>
    </div>
  );
};

export default TrackClassBox;

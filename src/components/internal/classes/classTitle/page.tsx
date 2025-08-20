import styles from './index.module.css';

type ClassTitleProps = {
  title: string;
};

const ClassTitle: React.FC<ClassTitleProps> = ({ title }) => {
    return (
      <h1 className={styles.title}>{title}</h1>
  )
};

export default ClassTitle;
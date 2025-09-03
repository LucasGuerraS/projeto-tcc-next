import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import TrackClassBox from '@/components/internal/trackClassBox/trackClassBox';

const AdapterTrack = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <h1 className={styles.title}>Trilha Introdutória</h1>
      <TrackClassBox
        title='Módulo 1 - Introdução aos padrões de Projeto'
        classesNames={[
          'Hello Design Patterns!',
          'Conhecendo os Patterns',
          'Entendendo os Objetivos dos Patterns',
        ]}
        progress={2}
        track='/tracks/intro'
        numbers={[1, 2, 3]}
      />
    </div>
  );
};

export default AdapterTrack;

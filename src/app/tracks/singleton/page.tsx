import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import TrackClassBox from '@/components/internal/trackClassBox/trackClassBox';

const AdapterTrack = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <h1 className={styles.title}>Trilha Singleton</h1>
      <TrackClassBox
        title='Módulo 1 - Introdução ao padrão Singleton'
        classesNames={[
          'Introdução ao padrão Singleton',
          'Quando Usar',
          'Como Implementar',
        ]}
        progress={1}
      />
      <TrackClassBox
        title='Módulo 2 - Aplicando o Padrão Singleton'
        classesNames={[
          'Aplicando em Código',
          'Continuando a Implementação',
          'Quiz',
        ]}
        progress={0}
      />
    </div>
  );
};

export default AdapterTrack;

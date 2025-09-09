import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import TrackClassBox from '@/components/internal/trackClassBox/trackClassBox';
import { validateSession } from '@/_utils/validateSession';
import { calculateFirst, calculateSecond } from '@/_utils/calculate_progress';

const AdapterTrack = async () => {
  const userData = await validateSession();
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
        progress={calculateFirst(userData.progress_b)}
        track='/tracks/singleton'
        numbers={[1, 2, 3]}
      />
      <TrackClassBox
        title='Módulo 2 - Aplicando o Padrão Singleton'
        classesNames={[
          'Aplicando em Código',
          'Continuando a Implementação',
          'Quiz',
        ]}
        progress={calculateSecond(userData.progress_b)}
        track='/tracks/singleton'
        numbers={[4, 5, 6]}
      />
    </div>
  );
};

export default AdapterTrack;

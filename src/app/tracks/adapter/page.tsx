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
      <h1 className={styles.title}>Trilha Adapter</h1>
      <TrackClassBox
        title='Módulo 1 - Introdução ao padrão Adapter'
        classesNames={[
          'Introdução ao padrão Adapter',
          'Quando Usar',
          'Como Implementar',
        ]}
        progress={calculateFirst(userData.progress_c)}
        track='/tracks/adapter'
        numbers={[1, 2, 3]}
      />
      <TrackClassBox
        title='Módulo 2 - Aplicando o Padrão Adapter'
        classesNames={[
          'Aplicando em Código',
          'Continuando a Implementação',
          'Quiz',
        ]}
        progress={calculateSecond(userData.progress_c)}
        track='/tracks/adapter'
        numbers={[4, 5, 6]}
      />
    </div>
  );
};

export default AdapterTrack;

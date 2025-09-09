import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import TrackClassBox from '@/components/internal/trackClassBox/trackClassBox';
import { validateSession } from '@/_utils/validateSession';

const AdapterTrack = async () => {
  const userData = await validateSession();
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
        progress={userData.progress_d}
        track='/tracks/intro'
        numbers={[1, 2, 3]}
      />
    </div>
  );
};

export default AdapterTrack;

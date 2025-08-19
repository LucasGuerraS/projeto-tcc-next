import DefaultHeader from '@/components/factory/defaultHeader/defaultHeader';
import styles from './index.module.css';
import TrackClassBox from '@/components/factory/trackClassBox/trackClassBox';

const AdapterTrack = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <h1 className={styles.title}>Trilha Factory</h1>
      <TrackClassBox title='Módulo 1 - Introdução ao padrão Factory' classesNames={['Introdução ao padrão Factory', 'Quando Usar', 'Como Implementar']} progress={2}/>
      <TrackClassBox title='Módulo 2 - Aplicando o Padrão Factory' classesNames={['Aplicando em Código', 'Continuando a Implementação', 'Quiz']} progress={0} />
    </div>
  );
};

export default AdapterTrack;

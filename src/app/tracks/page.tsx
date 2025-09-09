import type { NextPage } from 'next';
import styles from './index.module.css';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import TracksImage from '@/components/internal/trackImage/trackImage';
import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import { validateSession } from '@/_utils/validateSession';

const AllTracks: NextPage = async () => {
  const userData = await validateSession();
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <div className={styles.generalTitle}>
        <h1>Progressão Geral</h1>
        <Progress
          className={styles.progressBar}
          value={
            ((userData.progress_a + userData.progress_b + userData.progress_c) *
              16.66) /
            3
          }
        />
      </div>
      <div className={styles.generalBody}>
        <div className={styles.introTrack}>
          <h2 className={styles.introTitle}>
            Novo no assunto ou aqui no site? Comece pelo módulo introdutório
          </h2>
          <Separator
            className={styles.separatorStyle}
            orientation='horizontal'
          />
          <TracksImage
            imageSource='/JAVINHA.png'
            imageTitle='Módulo introdutório'
            imageDesc='Realize o módulo de introdução para nivelar seu conhecimento com o esperado'
            path='/tracks/intro'
          />
        </div>
        <div className={styles.allTracks}>
          <h1>Trilhas de Aprendizado</h1>
        </div>
        <div className={styles.tracksContainer}>
          <TracksImage
            imageSource='https://pocketstop.com/wp-content/uploads/2021/07/Factory%20against%20blue%20cloudy%20sky-1.jpeg'
            imageTitle='Factory'
            imageDesc='Aprenda mais sobre o Factory!'
            path='/tracks/factory'
          />
          <TracksImage
            imageSource='https://dreammaker.co.uk/wp-content/uploads/2022/02/feeling-alone.jpg'
            imageTitle='Singleton'
            imageDesc='Aprenda mais sobre o Singleton!'
            path='/tracks/singleton'
          />
          <TracksImage
            imageSource='https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/zurojqnv/file.png'
            imageTitle='Adapter'
            imageDesc='Aprenda mais sobre o Adapter!'
            path='/tracks/adapter'
          />
        </div>
      </div>
    </div>
  );
};

export default AllTracks;

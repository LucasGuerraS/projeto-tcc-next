import type { NextPage } from 'next';
import styles from './index.module.css';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import TracksImage from '@/components/internal/trackImage/trackImage';

const AllTracks: NextPage = () => {
  return (
    <div className={styles.content}>
      <header className={styles.navigation}>
        <div className={styles.items}>
          <a className={styles.designpatternsfactory}>DesignPatternsFactory</a>
          <div className={styles.divider} />
          <a className={styles.home}>Home</a>
          <a className={styles.home}>Profile</a>
        </div>
      </header>
      <div className={styles.generalTitle}>
        <h1>Progressão Geral</h1>
        <Progress className={styles.progressBar} value={37} />
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
            imageSource='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
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
            imageSource='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
            imageTitle='Factory'
            imageDesc='Aprenda mais sobre o Factory!'
            path='/tracks/factory'
          />
          <TracksImage
            imageSource='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
            imageTitle='Singleton'
            imageDesc='Aprenda mais sobre o Singleton!'
            path='/tracks/singleton'
          />
          <TracksImage
            imageSource='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
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

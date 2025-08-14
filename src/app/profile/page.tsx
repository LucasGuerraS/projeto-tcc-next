import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './index.module.css';

const Profile: NextPage = () => {
  return (
    <div className={styles.profile}>
      <header className={styles.navigation}>
        <div className={styles.items}>
          <a className={styles.designpatternsfactory}>
            DesignPatternsFactory
          </a>
          <div className={styles.divider} />
          <a className={styles.home}>Home</a>
          <a className={styles.home}>Tracks</a>
        </div>
      </header>
      <div className={styles.body}>
        <div>
          <Image
            width={360}
            height={360}
            sizes='100vw'
            alt='profile picture'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          />
          <div>
            <div>Username</div>
            <div>User@gmail.com</div>
            <div>
              <b>Editar perfil</b>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <b>Explorar Trilhas</b>
          </div>
          <div />
          <b>Progressão</b>
          <div />
          <div />
          <div />
          <div />
          <div>Trilha 1</div>
          <div />
          <div>Level 1</div>
          <div>Trilha 2</div>
          <div>Trilha 3</div>
          <div>Progresso Geral</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

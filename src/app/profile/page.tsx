import type { NextPage } from 'next';
import styles from './index.module.css';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Profile: NextPage = () => {
  return (
    <div className={styles.profile}>
      <header className={styles.navigation}>
        <div className={styles.items}>
          <a className={styles.designpatternsfactory}>DesignPatternsFactory</a>
          <div className={styles.divider} />
          <a className={styles.home}>Home</a>
          <a className={styles.home}>Tracks</a>
        </div>
      </header>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.comboLevel}>
            <Label htmlFor='progress' className={styles.label}>
              Level 1
            </Label>
            <Progress className={styles.progressBar} id='progress' value={37} />
          </div>
          <Card className={styles.profileInfo}>
            <CardContent className={styles.profileBody}>
              <Avatar>
                <AvatarImage
                  className={styles.cardPic}
                  src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                  alt='profile pic'
                />
                <AvatarFallback>Profile Picture</AvatarFallback>
              </Avatar>
              <p className={styles.cardTitle}>Informações do Perfil:</p>
              <p className={styles.cardInfos}>Username</p>
              <p className={styles.cardInfos}>User@gmail.com</p>
            </CardContent>
          </Card>
        </div>
        <Separator orientation='vertical' />
        <div className={styles.right}>
          <b className={styles.rightTitle}>Progressão</b>
          <div>Trilha 1</div>
          <Progress className={styles.rightBar} id='progress' value={87} />
          <div>Trilha 2</div>
          <Progress className={styles.rightBar} id='progress' value={57} />
          <div>Trilha 3</div>
          <Progress className={styles.rightBar} id='progress' value={12} />
          <div>Progresso Geral</div>
          <Progress className={styles.rightBar} id='progress' value={0} />
          <Button className={styles.rightButton}>Explorar trillhas</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

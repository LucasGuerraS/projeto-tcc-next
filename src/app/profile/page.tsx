import type { NextPage } from 'next';
import styles from './index.module.css';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import GenericNavButton from '@/components/internal/genericNavButton/GenericNavButton';
import { validateSession } from '@/_utils/validateSession';
import { redirect, RedirectType } from 'next/navigation';

const Profile: NextPage = async () => {
  const userData = await validateSession();
  if (!userData) {
    redirect('/', RedirectType.replace);
  }
  return (
    <div className={styles.profile}>
      <header className={styles.navigation}>
        <div className={styles.items}>
          <a className={styles.designpatternsfactory}>DesignPatternsFactory</a>
          <div className={styles.divider} />
          <Link className={styles.home} href='/tracks'>
            Tracks
          </Link>
        </div>
      </header>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.comboLevel}>
            <Label htmlFor='progress' className={styles.label}>
              Level {Math.floor(userData.experience / 2)}
            </Label>
            <Progress
              className={styles.progressBar}
              id='progress'
              value={userData.experience % 2 * 50}
            />
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
              <p className={styles.cardInfos}>{userData.name}</p>
              <p className={styles.cardInfos}>{userData.email}</p>
            </CardContent>
          </Card>
        </div>
        <Separator orientation='vertical' />
        <div className={styles.right}>
          <b className={styles.rightTitle}>Progressão</b>
          <div>Factory</div>
          <Progress
            className={styles.rightBar}
            id='progress'
            value={userData.progress_a * 16.66}
          />
          <div>Singleton</div>
          <Progress
            className={styles.rightBar}
            id='progress'
            value={userData.progress_b * 16.66}
          />
          <div>Adapter</div>
          <Progress
            className={styles.rightBar}
            id='progress'
            value={userData.progress_c * 16.66}
          />
          <div>Progresso Geral</div>
          <Progress
            className={styles.rightBar}
            id='progress'
            value={
              ((userData.progress_a +
                userData.progress_b +
                userData.progress_c) *
                16.66) /
              3
            }
          />
          <GenericNavButton
            path='/tracks'
            text='Explorar trilhas'
            styles='mt-[20px] bg-black text-white hover:bg-gray-800 hover:cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;

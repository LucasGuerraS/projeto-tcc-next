import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import styles from './index.module.css';

type TracksImageProps = {
  imageSource: string;
  imageTitle: string;
  imageDesc: string;
}

const TracksImage: React.FC<TracksImageProps> = ({
  imageSource,
  imageTitle,
  imageDesc
}) => {
  return (
    <Card className={styles.profileInfo}>
      <CardContent className={styles.profileBody}>
        <Avatar>
          <AvatarImage
            className={styles.cardPic}
            src={imageSource}
            alt='profile pic'
          />
          <AvatarFallback>Profile Picture</AvatarFallback>
        </Avatar>
        <p className={styles.cardTitle}>{imageTitle}</p>
        <p className={styles.cardInfos}>{imageDesc}</p>
      </CardContent>
    </Card>
  );
};

export default TracksImage;

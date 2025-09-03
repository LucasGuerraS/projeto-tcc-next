'use client'

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import styles from './index.module.css';

type TracksImageProps = {
  imageSource: string;
  imageTitle: string;
  imageDesc: string;
  path: string;
}

const TracksImage: React.FC<TracksImageProps> = ({
  imageSource,
  imageTitle,
  imageDesc,
  path
}) => {
  return (
    <Card className={styles.profileInfo} onClick={() => window.location.href = path}>
      <CardContent className={styles.profileBody}>
        <Avatar>
          <AvatarImage
            className={styles.cardPic}
            src={imageSource}
            alt='tracks image'
          />
          <AvatarFallback>Tracks image</AvatarFallback>
        </Avatar>
        <p className={styles.cardTitle}>{imageTitle}</p>
        <p className={styles.cardInfos}>{imageDesc}</p>
      </CardContent>
    </Card>
  );
};

export default TracksImage;

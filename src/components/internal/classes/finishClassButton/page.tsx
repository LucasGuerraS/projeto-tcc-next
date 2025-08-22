'use client';

import styles from './index.module.css';
import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';

type FinishClassButtonProps = {
    path: string;
};

const FinishClassButton: React.FC<FinishClassButtonProps> = ({ path }) => {
  return (
    <Button
      variant='secondary'
      className={styles.button}
      onClick={() => {
          alert('Aula finalizada!');
          window.location.href = path;
      }}
    >
      <CircleCheck />
      Finalizar aula
    </Button>
  );
};

export default FinishClassButton;

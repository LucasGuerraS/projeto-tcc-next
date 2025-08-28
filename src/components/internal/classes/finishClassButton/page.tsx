'use client';

import styles from './index.module.css';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CircleCheck } from 'lucide-react';

type FinishClassButtonProps = {
  path: string;
  disabled?: boolean;
};

const FinishClassButton: React.FC<FinishClassButtonProps> = ({
  path,
  disabled = false,
}) => {
  return (
    <>
      <Button
        disabled={disabled}
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
      {disabled ? <Label className='text-red-500'>Finalize o desafio antes de seguir</Label> : null}
    </>
  );
};

export default FinishClassButton;

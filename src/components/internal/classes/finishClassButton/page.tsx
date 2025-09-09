'use client';

import styles from './index.module.css';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CircleCheck } from 'lucide-react';
import { toast } from 'sonner';

type FinishClassButtonProps = {
  path: string;
  disabled?: boolean;
  trackId: number;
  number: number;
};

const FinishClassButton: React.FC<FinishClassButtonProps> = ({
  path,
  disabled = false,
  trackId,
  number,
}) => {
  return (
    <>
      <Button
        disabled={disabled}
        variant='secondary'
        className={styles.button}
        onClick={async () => {
          const response = await fetch('/api/updateClassProgress', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ trackId: trackId, classNumber: number }),
          });
          if (!response.ok) {
            toast.error('Erro ao finalizar aula. Tente novamente.');
            return;
          }

          toast.success('Aula finalizada! Prossiga para a próxima.');
          window.location.href = path;
        }}
      >
        <CircleCheck />
        Finalizar aula
      </Button>
      {disabled ? (
        <Label className='text-red-500'>
          Finalize o desafio antes de seguir
        </Label>
      ) : null}
    </>
  );
};

export default FinishClassButton;

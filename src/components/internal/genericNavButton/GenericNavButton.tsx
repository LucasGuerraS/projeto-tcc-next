'use client';

import { Button } from '@/components/ui/button';

type GenericNavButtonProps = {
  path: string;
  disabled?: boolean;
  text: string;
  styles?: string;
};

const GenericNavButton: React.FC<GenericNavButtonProps> = ({
  path,
  disabled = false,
  text,
  styles,
}) => {
  return (
    <Button
      disabled={disabled}
      variant='secondary'
      onClick={() => {
        window.location.href = path;
      }}
      className={styles}
    >
      {text}
    </Button>
  );
};

export default GenericNavButton;

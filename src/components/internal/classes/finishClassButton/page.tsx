"use client"

import styles from './index.module.css';
import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';

const FinishClassButton: React.FC = () => {
    return (
        <Button variant="secondary" className={styles.button} onClick={() => alert('Aula finalizada!')}>
            <CircleCheck />
            Finalizar aula
        </Button>
    )
}

export default FinishClassButton;
import { Button } from "@/components/ui/button";
import styles from "./index.module.css";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

type ClassButtonProps = {
    path: string;
};

const ClassButton: React.FC<ClassButtonProps> = ({ path }) => {
    return(
        <Button variant="ghost" className={styles.button} asChild>
            <Link href={path}>
                <ArrowLeft />
                Voltar para trilha
            </Link>
        </Button>
    )
}

export default ClassButton;
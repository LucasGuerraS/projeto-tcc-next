'use client';

import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import CodeRunner from '@/components/internal/codeRunner/codeRunner';
import { useState } from 'react';
import { redirect } from 'next/navigation';

const CONTENT_1 = `// ---------- Classe Principal ----------
public class Festa {
    public static void main(String[] args) {
        System.out.println("Bem-vindo a Festa!");

        // Singleton SomDaFesta
        SomDaFesta som1 = new SomDaFesta();
        som1.tocarMusica("Capivara Funk");
        som1.mostrarStatus();

        // Outra referência -- mesma instância
        SomDaFesta som2 = new SomDaFesta();
        som2.aumentarVolume();
        som2.mostrarStatus();

        // Comprovação: alterações feitas em som2 refletem em som1
        som1.diminuirVolume();
        som1.mostrarStatus();
    }
}

// ---------- Singleton SomDaFesta ----------
public class SomDaFesta {

    private int volume;
    private String musicaAtual;

    public SomDaFesta() {
        this.volume = 5; // volume inicial
        this.musicaAtual = "Nenhuma musica tocando";
    }

    public void aumentarVolume() {
        if (volume < 10) {
            volume++;
            System.out.println("Volume aumentado para " + volume);
        } else {
            System.out.println("Volume ja está no maximo!");
        }
    }

    public void diminuirVolume() {
        if (volume > 0) {
            volume--;
            System.out.println("Volume diminuido para " + volume);
        } else {
            System.out.println("Volume ja está no mínimo!");
        }
    }

    public void tocarMusica(String musica) {
        this.musicaAtual = musica;
        System.out.println("Agora tocando: " + musicaAtual);
    }

    public void mostrarStatus() {
        System.out.println("Status do Som:");
        System.out.println(" - Volume: " + volume);
        System.out.println(" - Musica atual: " + musicaAtual);
    }
}
`;

const EXPECTED =
  'Bem-vindo a Festa!\nAgora tocando: Capivara Funk\nStatus do Som:\n - Volume: 5\n - Musica atual: Capivara Funk\nVolume aumentado para 6\nStatus do Som:\n - Volume: 6\n - Musica atual: Capivara Funk\nVolume diminuido para 5\nStatus do Som:\n - Volume: 5\n - Musica atual: Capivara Funk\n';

const SingletonSix = () => {
  fetch('/api/validateSession', { method: 'GET', credentials: 'include' }).then(
      async (res) => {
        if (res.status === 302) {
          redirect('/');
        }
      }
  );
  
  const [completed, setCompleted] = useState<boolean>(false);

  const handleComplete = (code: string) => {
    if (code === EXPECTED) {
      setCompleted(true);
    }
  };

  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/singleton/' />
      <ClassTitle title='Aula 3 - Desafio final, implementação do Singleton' />
      <p className={styles.text}>
        Agora, temos um desafio final para você! É sua vez de implementar o
        Singleton. Boa sorte!{' '}
        <b>
          A main já está escrita, basta apenas implementar a lógica do
          Singleton e corrigir como os objetos são criados da main, sem mudar sua lógica geral.
        </b>
      </p>
      <CodeRunner
        content={CONTENT_1}
        editorHeight={70}
        handleSuccess={handleComplete}
      />
      <p className={styles.text}>
        O Singleton é um padrão simples e intuitivo, caso ainda tenha dúvidas
        não tenha medo de experimentar com ele no seu ambiente de
        desenvolvimento para entender melhor e tentar pensar em diferentes
        aplicações do mesmo dentro do contexto de desenvolvimento.{' '}
        <b>Sua curiosidade te levará para as alturas.</b>
      </p>
      <FinishClassButton path='/tracks/singleton' disabled={!completed} trackId={2} number={6} />
    </div>
  );
};

export default SingletonSix;

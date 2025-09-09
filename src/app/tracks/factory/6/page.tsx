'use client';

import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import CodeRunner from '@/components/internal/codeRunner/codeRunner';
import { useState } from 'react';
import { redirect } from 'next/navigation';

const CONTENT_1 = `import java.util.*;

// ---------- Jogo Principal ----------
public class Jogo {
    public static void main(String[] args) {
        FabricaDeEntidades[] geradores = {
            new GeradorDeOrcs(),
            new GeradorDeVampiros()
        };

        FabricaDeEntidades fabricaDeJogador = new FabricaDeJogador();
        Entidade jogador = fabricaDeJogador.criarEntidade();

        System.out.println("Bem-vindo a Arena!");
        System.out.println("O jogador foi criado: " + jogador.getNome());

        // Mostrar alguns inimigos gerados aleatoriamente
        Random random = new Random();
        System.out.println("Na arena, voce podera encontrar:");

        for (int i = 0; i < 3; i++) {
            Entidade inimigo = geradores[random.nextInt(geradores.length)].criarEntidade();
            System.out.println("- Um inimigo do tipo: " + inimigo.getNome());
        }

        System.out.println("Isso demonstra como diferentes entidades podem ser criadas atraves do Factory Method.");
    }
}

// ---------- Interface de Entidade ----------
interface Entidade {
    String getNome();
}

// ---------- Entidades Concretas ----------
class Jogador implements Entidade {
    @Override
    public String getNome() { return "Jogador"; }
}

class Orc implements Entidade {}

class Vampiro implements Entidade {}

// ---------- Interface de Fábrica ----------
abstract class FabricaDeEntidades {
    public abstract Entidade criarEntidade();
}

// ---------- Fábricas Concretas ----------
class FabricaDeJogador extends FabricaDeEntidades {
    @Override
    public Entidade criarEntidade() {
        return new Jogador();
    }
}

class GeradorDeOrcs extends FabricaDeEntidades {}

class GeradorDeVampiros extends FabricaDeEntidades {}
`;

const EXPECTED = ['Jogador', 'Orc', 'Vampiro'];

const FactorySix = () => {
  fetch('/api/validateSession', { method: 'GET', credentials: 'include' }).then(
      async (res) => {
        if (res.status === 302) {
          redirect('/');
        }
      }
  );
  
  const [completed, setCompleted] = useState<boolean>(false);

  const handleComplete = (code: string) => {
    if (
      code.includes(EXPECTED[0]) &&
      (code.includes(EXPECTED[1]) || code.includes(EXPECTED[2]))
    ) {
      setCompleted(true);
    }
  };


  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/factory/' />
      <ClassTitle title='Aula 3 - Desafio final, um jogo com o Factory' />
      <p className={styles.text}>
        Agora que passamos o básico do factory method vamos fazer um desafio
        para consolidar o conhecimento e enriquecer ainda mais o aprendizado,
        nele você irá construir um jogo básico, com inimigos, usando o factory
        pattern, Boa sorte!
        <b>Dica:</b>
        <span>O output deve conter as tres entidades: Jogador, Orc e Vampiro</span>
      </p>
      <CodeRunner
        content={CONTENT_1}
        editorHeight={70}
        handleSuccess={handleComplete}
      />
      <p className={styles.text}>
        Também gostaríamos de deixar alguns pontos de reflexão e exploração,
        tente adicionar mais inimigo ao jogo e pensar em casos de uso diferentes
        além de pensar nisso não só como um aprendizado de um design pattern mas
        levar princípios como código pouco acoplado e Open/Closed para a sua
        carreira como ferramentas de trabalho.{' '}
        <b>Sua curiosidade te levará para as alturas.</b>
      </p>
      <FinishClassButton path='/tracks/factory' disabled={!completed} trackId={1} number={6} />
    </div>
  );
};

export default FactorySix;

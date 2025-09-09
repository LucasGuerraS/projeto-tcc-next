import QuizForm from '@/components/internal/quiz/quizForm/quizForm';
import styles from './index.module.css';
import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import { validateSession } from '@/_utils/validateSession';

const QuizPageAdapter = async () => {
  await validateSession();
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <QuizForm
        questionTitle='Qual dos seguintes não é um benefício do uso do adapter?'
        options={[
          'Código do cliente não fica acoplado ao adaptador',
          'Possível integrar código legado',
          'Segue o princípio de responsabilidade única',
          'Melhora performance do código',
        ]}
        correctAnswer='Melhora performance do código'
        path='/tracks/adapter'
      />
    </div>
  );
};

export default QuizPageAdapter;

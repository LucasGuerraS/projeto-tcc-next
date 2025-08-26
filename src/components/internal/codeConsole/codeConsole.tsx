import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import { useState } from 'react';
import { ThreeDot } from 'react-loading-indicators';

const CodeConsole: React.FC = () => {
  const [output, setOutput] = useState<string>(
    'Clique em "Executar" para ver o resultado'
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const handleClick = () => {
    setOutput('Executando código...');
    setIsLoading(true);
    setTimeout(() => {
      setOutput('Código executado com sucesso!');
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div
      className={`w-full h-auto flex flex-col items-left bg-[#1e1e1e] text-white text-left pt-6 pl-4 pb-6 pr-4`}
    >
      <Button
        onClick={handleClick}
        className='w-full bg-black cursor-pointer hover:bg-gray-800 hover:text-white'
        variant='outline'
      >
        {isLoading ? (
          <ThreeDot size='small' color='white' />
        ) : (
          <>
            <PlayCircle />
            <span>Executar</span>
          </>
        )}
      </Button>
      <p className={`mt-4 ${error ? 'text-red-500' : 'text-gray-300'}`}>
        {output}
      </p>
    </div>
  );
};

export default CodeConsole;

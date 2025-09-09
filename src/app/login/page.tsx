'use client';

import type { NextPage } from 'next';
import styles from './index.module.css';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

type APIError = {
  code: string;
  message: string;
};

const formSchema = z.object({
  email: z.email({ error: 'Email inválido' }),
  password: z
    .string()
    .min(8, {
      error: 'Senha precisa ter mais que 8 caracteres',
    })
    .max(100, {
      error: 'Senha precisa ter menos que 100 caracteres',
    }),
});

const Login: NextPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email, password: values.password }),
      });
      const data = await response.json();
      if (!data) {
        toast.error('Erro ao entrar com conta', {
          description: 'Email ou senha inválidos',
        });
        form.setError(
          'email',
          { message: 'Email ou senha inválidos' },
          { shouldFocus: true }
        );
        form.setError('password', { message: 'Email ou senha inválidos' });
      }
      else if (response.status === 200 && data) {
        toast.success('Login realizado com sucesso!');
        window.location.href = '/profile'
      }
    } catch (error) {
      toast.error('Erro ao entrar com conta', {
        description: `Email ou senha inválidos, ${(error as APIError).message}`,
      });
      form.setError(
        'email',
        { message: 'Email ou senha inválidos' },
        { shouldFocus: true }
      );
      form.setError('password', { message: 'Email ou senha inválidos' });
    }
  };
  return (
    <div className={styles.signup}>
      <div className={styles.navigation}>
        <div className={styles.items}>
          <div
            className={styles.home}
            onClick={() => (window.location.href = '/')}
          >
            Home
          </div>
        </div>
        <div className={styles.designpatternsfactory}>
          DesignPatternsFactory
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={styles.form}
          id='form'
        >
          <div className={styles.heading}>
            <div className={styles.crieSuaConta}>Entre com sua conta!</div>
          </div>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className={styles.input2}>
                <FormLabel className={styles.nomeDeUsurio}>Email</FormLabel>
                <FormControl className={styles.field2}>
                  <Input
                    type='email'
                    {...field}
                    placeholder='Digite seu email'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className={styles.input2}>
                <FormLabel className={styles.nomeDeUsurio}>Senha</FormLabel>
                <FormControl className={styles.field2}>
                  <Input
                    type='password'
                    {...field}
                    placeholder='Digite sua senha'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className={styles.button}>
            Entrar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;

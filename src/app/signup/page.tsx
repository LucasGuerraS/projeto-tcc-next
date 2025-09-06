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
import { APIError, createUser, UserData } from '@/_clients/backend';
import { toast } from 'sonner';

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      error: 'Username precisa ter mais que duas letras',
    })
    .max(50, {
      error: 'Username precisa ter menos que 50 letras',
    }),
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

const Signup: NextPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userData: UserData = {
        name: values.username,
        email: values.email,
        password: values.password,
        experience: 0,
        progress_a: 0,
        progress_b: 0,
        progress_c: 0,
        certificate: false,
      };
      const response = await createUser(userData);
      if (response.status === 201) {
        toast.success('Conta criada com sucesso!');
        window.location.href = '/login';
      }
    } catch (error) {
      toast.error('Erro ao criar conta', {
        description: `Email já registrado ou senha inválida, ${
          (error as APIError).message
        }`,
      });
      form.setError(
        'username',
        { message: 'Email já registrado ou senha inválida' },
        { shouldFocus: true }
      );
      form.setError('email', {
        message: 'Email já registrado ou senha inválida',
      });
      form.setError('password', {
        message: 'Email já registrado ou senha inválida',
      });
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
        >
          <div className={styles.heading}>
            <div className={styles.crieSuaConta}>Crie sua conta!</div>
          </div>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className={styles.input2}>
                <FormLabel className={styles.nomeDeUsurio}>
                  Nome de usuário
                </FormLabel>
                <FormControl className={styles.field2}>
                  <Input
                    type='text'
                    {...field}
                    placeholder='Digite seu nome de usuario'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            Criar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Signup;

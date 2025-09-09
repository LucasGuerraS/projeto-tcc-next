import { getUserById } from '@/_clients/backend';
import { getSession } from '@/_utils/session';
import { NextResponse } from 'next/server';

export type UserResponse = {
  id: number;
  name: string;
  email: string;
  password: string;
  experience: number;
  progress_a: number;
  progress_b: number;
  progress_c: number;
  progress_d: number;
  certificate: boolean;
};

export const GET = async (): Promise<NextResponse<UserResponse | unknown>> => {
  const session = await getSession();
  if (!session) {
    return NextResponse.json('', { status: 302 });
  }
  const user = (await getUserById(session.value)).data as UserResponse;
  if (!user) {
    return NextResponse.json('', { status: 302 });
  }
  return NextResponse.json(user, { status: 200 });
};

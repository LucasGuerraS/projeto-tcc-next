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
  certificate: boolean;
};

export const GET = async (): Promise<
  NextResponse<UserResponse | { message: string }>
> => {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  const user = (await getUserById(session.value)).data as UserResponse;
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
  return NextResponse.json(user, { status: 200 });
};

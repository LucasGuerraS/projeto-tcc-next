import { login } from '@/_clients/backend';
import { createSession } from '@/_utils/session';
import { NextRequest, NextResponse } from 'next/server';

type RequestBody = {
  email: string;
  password: string;
};

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const { email, password }: RequestBody = await req.json();
  const response = await login(email, password);
  if (response.data) {
    await createSession(response.data);
  }
  return NextResponse.json(response.data, { status: response.status });
};

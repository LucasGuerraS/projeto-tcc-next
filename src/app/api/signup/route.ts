import { createUser, UserData } from '@/_clients/backend';
import { createSession } from '@/_utils/session';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const userData: UserData = await req.json();
  const response = await createUser(userData);
  if (response.data) {
    await createSession(response.data);
  }
  return NextResponse.json(response.data, { status: response.status });
};

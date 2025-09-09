import { getUserById, updateClassProgress } from '@/_clients/backend';
import { getSession } from '@/_utils/session';
import { NextRequest, NextResponse } from 'next/server';

type RequestBody = {
  trackId: number;
  classNumber: number;
};

export const POST = async (req: NextRequest): Promise<NextResponse> => {
    const { trackId, classNumber }: RequestBody = await req.json();
    console.log(trackId, classNumber);
    
  const session = await getSession();
  const user = await getUserById(session!.value);
  let hasCompleted = false;
  switch (trackId) {
    case 1:
      console.log('1');
      if (user.data.progress_a >= classNumber) {
        hasCompleted = true;
      }
      break;

    case 2:
      console.log('2');
      if (user.data.progress_b >= classNumber) {
        hasCompleted = true;
      }
      break;

    case 3:
      console.log('3');

      if (user.data.progress_c >= classNumber) {
        hasCompleted = true;
      }
      break;

    case 4:
      console.log('4');
      if (user.data.progress_d >= classNumber) {
        hasCompleted = true;
      }
      break;

    default:
  }
  if (!hasCompleted) {
    const response = await updateClassProgress(trackId.toString());
    return NextResponse.json(response.data, { status: response.status });
  }
  return NextResponse.json('completed', { status: 200 });
};

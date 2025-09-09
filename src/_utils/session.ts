import 'server-only';
import { cookies } from 'next/headers';


// Create session with user ID in cookie
export const createSession = async (userId: string) => {
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7); // 7 days
  const cookieStore = await cookies();
  cookieStore.set('session', userId, { expires: expiresAt, path: '/' });
};

// Get session from cookie
export const getSession = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');
  return session;
};

// Delete session cookie
export const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('session');
};

import { createConnection } from '$lib/db/mysql';

export const handle = async ({ event, resolve }) => {
  // ---- Sprache aus Cookie holen (fallback: Accept-Language) ----
  const cookieLang = event.cookies.get('lang');
  const accept = event.request.headers.get('accept-language') || '';
  const supported = ['sq', 'en', 'de', 'it', 'zh'];
  const pickFromAccept = accept.split(',').map(p => p.trim().slice(0,2)).find(l => supported.includes(l));
  event.locals.lang = cookieLang && supported.includes(cookieLang) ? cookieLang : (pickFromAccept || 'en');
  // ---------------------------------------------------------------

  const session = event.cookies.get('session');
  if (!session) return await resolve(event);

  const db = await createConnection();
  const [users] = await db.execute('SELECT * FROM users WHERE session_token = ?', [session]);
  if (users.length === 0) {
    event.cookies.set('session', '', { path: '/', maxAge: -1 });
    return await resolve(event);
  }

  event.locals.user = users[0];
  return await resolve(event);
};

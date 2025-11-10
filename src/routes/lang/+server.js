import { redirect } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
  const data = await request.formData();
  const lang = String(data.get('lang') || 'en');
  const supported = ['sq', 'en', 'de', 'it', 'zh'];

  cookies.set('lang', supported.includes(lang) ? lang : 'en', {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    httpOnly: false
  });

  const referer = request.headers.get('referer');
  throw redirect(303, referer ?? '/');
}

import  { login } from '$lib/db/auth';
import { redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ request, cookies }) => {

        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        const token = await login(email, password);

        if (token) {
            // If login is successful, store the session token in a secure cookie
            cookies.set('session', token, {
                maxAge: 60 * 60 * 24 * 7,
                path: '/',
                httpOnly: true,
                sameSite: 'strict'
            });
            redirect(302, '/');
        } else {
            // If login fails, return a failure message to the frontend
            return {
                success: false,
                message: 'Login failed'
            };
        }

    }
};
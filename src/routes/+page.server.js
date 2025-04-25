import { createConnection } from '$lib/db/mysql'; // Import the createConnection function to interact with the database

export async function load({ locals }) {
	let connection = await createConnection();


	return {
		user: locals.user,
	
	};
}

export const actions = {
	
	
};
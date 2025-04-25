
import { createConnection } from '$lib/db/mysql';

export async function GET({ params }) {
	const { uuid } = params;
	const connection = await createConnection();


	// Fetch the top 25 articles ordered by vote count (most voted first)
	const [rows] = await connection.execute('SELECT * FROM articles order by votes desc limit 25');


	return new Response(JSON.stringify(rows), {
		status: 200,
		headers: { 'content-type': 'application/json' }
	});
}
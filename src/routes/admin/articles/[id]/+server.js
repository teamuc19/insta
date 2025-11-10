
import { createConnection } from '$lib/db/mysql';


export async function GET({ params }) {
	const { uuid } = params; // Get the UUID-universallyUniqueIdentifier (article ID) from the route parameters
	const connection = await createConnection();

	const [rows] = await connection.execute('SELECT * FROM articles WHERE id = ?', [uuid]);

	const article = rows[0]; 
	return new Response(JSON.stringify(article), {
		status: 200,
		headers: { 'content-type': 'application/json' }
	});
}


import { createConnection } from '$lib/db/mysql';

export async function GET({ params }) { // ich exportiere eine GET-Funktion.
	                                    //Sie wird aufgerufen, wenn ein HTTP-Request mit der Methode GET gemacht wird.
	const { uuid } = params;//enthält eine mögliche url-parameter(hier wird es nicht verwendet)
	const connection = await createConnection();


	//bekommt alle Daten aus article tabelle +votes
	const [rows] = await connection.execute('SELECT * FROM articles order by votes desc limit 25');


	return new Response(JSON.stringify(rows), {
		status: 200,//erfolgreich
		headers: { 'content-type': 'application/json' }
	});
}
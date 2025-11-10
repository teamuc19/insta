import { createConnection } from "$lib/db/mysql";
import { error } from "@sveltejs/kit";

export async function load( { locals }){ // wird automatisch ausgeführt, locals enthält infos  zum aktuell eingeloggten User
    const connection = await createConnection();

    // Check if the user is logged in and has admin privileges
    if (!locals.user || locals.user.role !== 'admin') {
		throw error(403, 'Not allowed');
	}

    // hole alle Artikel aus der Tabelle articles 
    let [ articleRows] = await connection.execute('select * from articles');

    return {
        articles : articleRows
    }
}


export const actions = {
    delete : async ( { request }) => {
        //holt id aus dem formular und stellt die verbindung zur datenbank her
        const formData = await request.formData();
        const connection = await createConnection();
        const id = await formData.get('id');
        
        await connection.execute('delete from articles where id = ? ', [id]);
    }
}
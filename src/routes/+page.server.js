import { createConnection } from '$lib/db/mysql'; // Import the createConnection function to interact with the database

export async function load( { locals }){
    const connection = await createConnection();

    //// Führt eine SQL-Abfrage aus, um alle Artikel aus der Tabelle "articles" zu holen
    let [ articleRows] = await connection.execute('select * from articles');

    return {
        articles : articleRows
    }
}



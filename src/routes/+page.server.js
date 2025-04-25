import { createConnection } from '$lib/db/mysql'; // Import the createConnection function to interact with the database

export async function load( { locals }){
    const connection = await createConnection();

    let [ articleRows] = await connection.execute('select * from articles');

    return {
        articles : articleRows
    }
}



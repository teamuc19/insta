

import { createConnection } from "$lib/db/mysql";

export async function load({ params }) {
    const { id } = params;
 
    let connection = await createConnection();
    let [rows] = await connection.execute('SELECT * FROM articles where id = ?', [id]);

    return {
        articles: rows
    }

}

import { createConnection } from "$lib/db/mysql";

export async function load( { locals }){
    const connection = await createConnection();

    let [ articleRows] = await connection.execute('select * from articles');

    return {
        articles : articleRows
    }
}


export const actions = {
    delete : async ( { request }) => {
        const formData = await request.formData();
         const connection = await createConnection();

        const id = await formData.get('id');

        await connection.execute('delete from articles where id = ? ', [id]);
    }
}
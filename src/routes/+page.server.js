import { createConnection } from '$lib/db/mysql'; // Import the createConnection function to interact with the database

export async function load( { locals }){
    const connection = await createConnection();

    let [ articleRows] = await connection.execute('select * from articles');

    return {
        articles : articleRows
    }
}


export const actions = {

	like: async ( {request}) =>{
		const formData = await request.formData();
		const connection = await createConnection();

		const articleID = await formData.get('id');

		await connection.execute('update articles set votes = votes + 1 where id = ?',[articleID]);

	},
	dislike: async ( {request}) =>{
		const formData = await request.formData();
		const connection = await createConnection();

		const articleID = await formData.get('id');

		await connection.execute('update articles set votes = votes - 1 where id = ?',[articleID]);
		
	}
	
	
};
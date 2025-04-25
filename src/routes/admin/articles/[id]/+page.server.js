import { createConnection } from "$lib/db/mysql";

export async function load({ params }) {
    const { id } = params;
 
    let connection = await createConnection();
    let [rows] = await connection.execute('SELECT * FROM articles where id = ?', [id]);

    let [commentRows] = await connection.execute("select * from comments");


    return {
        articles: rows,
        comments: commentRows
    }

}


export const actions = {

	like: async ( {request}) =>{
		const formData = await request.formData();
		const connection = await createConnection();

		const articleID = await formData.get('id');

		await connection.execute('update articles set votes = votes + 1 where id = ?',[articleID]);

	},
    
    // It takes the name, text, and article ID from the submitted form,
	// then inserts the comment into the 'comments' table in the database.
	writeComment: async ({ request }) => {
		const formData = await request.formData();

		const name = await formData.get('name');
		const text = await formData.get('text');
		const article_id = await formData.get('articleID');

		const connection = await createConnection();

		const [result] = await connection.execute(
			'INSERT INTO comments (name, text, article_id) VALUES (?, ?,?)',
			[name, text, article_id]
		);
	},
	
	
};
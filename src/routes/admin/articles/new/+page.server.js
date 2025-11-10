import { createConnection } from '$lib/db/mysql';
import { error, redirect } from '@sveltejs/kit';
import { put } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';

export async function load({ locals }) {
// Check if the user is logged in and has admin rights
	if (!locals.user || locals.user.role !== 'admin') {
		throw error(403, 'Not allowed');
	}
 
}
 //Wenn das Formular mit Methode POST gesendet wird, 
 // wird diese action ausgeführt.
export const actions = {
  new: async ({ request }) => {
    let formData = await request.formData();
    const connection = await createConnection();

    const image = formData.get('img');
    const author = formData.get('auth');
    const description = formData.get('desc');

    if (!image) {
      throw error(400, { message: 'No file to upload.' });
    }

    // Ensure allowOverwrite is set to a boolean value
    const allowOverwrite = true; // or false, depending on your needs

    // Das Bild wird zu Vercel Blob hochgeladen (Cloud-Speicher)
    const { url } = await put('insta-images/' + image.name, image, {
      access: 'public',
      token: BLOB_READ_WRITE_TOKEN,
      allowOverwrite // Use the proper boolean value
    });

    // Die Bild-URL, Beschreibung und Autor werden in die Datenbank gespeichert
    const [result] = await connection.execute(
      'INSERT INTO articles (image, description, author) VALUES (?, ?, ?)',
      [url, description, author]
    );
//kur ka ken e suksesshme
    if (result.affectedRows) {
      redirect(303, '/admin/articles');
    }
    
    return { uploaded: url };
  }
};

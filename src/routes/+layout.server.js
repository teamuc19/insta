
import { createConnection } from "$lib/db/mysql";

export async function load({locals}){
    let connection = await createConnection();
    return {
        user: locals.user
    }
}
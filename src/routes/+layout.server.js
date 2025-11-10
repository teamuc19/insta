import { createConnection } from "$lib/db/mysql";

export async function load({ locals }) {
  // user & lang kommen aus hooks.server.js
  return {
    user: locals.user,
    lang: locals.lang ?? "en"
  };
}

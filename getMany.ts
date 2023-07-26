
const kv = await Deno.openKv('./db');

await kv.set(['posts', 'post1'], { text: 'Hola mundo!' });

const response = await kv.getMany([
	['users', 'pagoru'],
	['users', 'root'],
	['posts', 'post1']
]);
console.log(response)

kv.close();
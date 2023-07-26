
const kv = await Deno.openKv('./db');

// await kv.set(['users', 'pagoru'], { name: 'Pablo' });

await kv.delete(['users', 'pagoru']);

const response = await kv.get(['users', 'pagoru'])
console.log(response);

kv.close();
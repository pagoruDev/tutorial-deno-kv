
const kv = await Deno.openKv('./db');

const user1 = {
	key: ['users', 'pagoru'],
	value: {
		name: 'Pablo',
		phone: 666777666
	}
}

await kv.set(user1.key, user1.value);

const userList = kv.list({ prefix: ['users'] }) ;
for await (const user of userList) {
	console.log(user.key, user.value);
}

kv.close();
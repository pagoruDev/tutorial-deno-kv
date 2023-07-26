
const kv = await Deno.openKv('./db');

const user1 = {
	key: ['users', 'pagoru'],
	value: {
		name: 'Pablo',
		phone: 666777666
	}
}
const user2 = {
	key: ['users', 'root'],
	value: {
		name: 'Admin',
		phone: 777666777
	}
}

const atomicResponse  = await kv.atomic()
	.check({ key: user2.key, versionstamp: null })
	.delete(user1.key)
	.set(user2.key, user2.value)
	.commit()

console.log(atomicResponse)

let response = await kv.get(user1.key)
console.log(response)
response = await kv.get(user2.key)
console.log(response)

kv.close();
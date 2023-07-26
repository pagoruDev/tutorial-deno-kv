
const kv = await Deno.openKv('./db');

kv.listenQueue(async (value) => {
	console.log('queue', value);
	await kv.set(['users', value.name.toLowerCase()], value)
})

await kv.enqueue({ name: 'Alberto' }, {
	delay: 4000,
	keysIfUndeliverd: [['draft_users', 'alberto']]
});
await kv.enqueue({ name: 'Alberto1' });

setInterval(async () => {
	let request = await kv.get(['users', 'alberto'])
	console.log(Date.now(), 'alberto', request.value)
	request = await kv.get(['users', 'alberto1'])
	console.log(Date.now(), 'alberto1', request.value)
}, 2000)
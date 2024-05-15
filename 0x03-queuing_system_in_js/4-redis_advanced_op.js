import { createClient, print } from 'redis';

const client = createClient()
  .on('connect', () => console.log('Redis client connected to the server'))
  .on('error', e => console.log(`Redis client not connected to the server: ${e}`));

client.HSET('HolbertonSchools', 'Portland', 50, print);
client.hset('HolbertonSchools', 'Seattle', '80', print);
client.hset('HolbertonSchools', 'New York', '20', print);
client.hset('HolbertonSchools', 'Bogota', '20', print);
client.hset('HolbertonSchools', 'Cali', '40', print);
client.hset('HolbertonSchools', 'Paris', '2', print);

client.hgetall('HolbertonSchools', (err, res) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log(res);
});
const redis = require('redis')

const client = redis.createClient({
    url:process.env.REDIS_URL
})

client.on('error', err => console.log('Redis Client Error', err))

client.connect().then(() => {
    console.log('Connected to Redis!');

    //Test Redis set/get operations
    client.set('testKey', 'Redis is working!', (err, reply) =>{
        if(err) console.error('Set Error:', err);
        else console.log('Set Reply:',reply); //Should print 'OK' if working

        //Now, test getting the value
        client.get('testKey', (err, value) =>{
            if(err) console.error('Get Error:', err)
                else console.log('Get Value:', value);//Should print 'Redis is working'
        })
    })
});
 
module.exports = client;
const dotenv = require("dotenv");
dotenv.config();

const redis = require('redis');

const pwd = process.env.PASSWORD;

const client = redis.createClient({
    password: pwd,
    socket: {
        host: 'redis-10450.c305.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 10450
    }
});

client.on("error", (error) => {
    console.log("Error Encountered: " + error);
});

client.on("connect", (error)=>{
    console.log("Redis Connection Established.")
})

client.connect();


module.exports = client;
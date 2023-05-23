import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () =>{ 

    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-xtcvaej-shard-00-00.zo6hsd6.mongodb.net:27017,ac-xtcvaej-shard-00-01.zo6hsd6.mongodb.net:27017,ac-xtcvaej-shard-00-02.zo6hsd6.mongodb.net:27017/?ssl=true&replicaSet=atlas-tjz5i7-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@27.59.252.135:27017/?ssl=true&replicaSet=atlas-tjz5i7-shard-0&authSource=admin&retryWrites=true&w=majority`;
 
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true }).then( ()=> { console.log("Connection Successful")} )

    // mongoose.connection.on('connected', () => {
    //     console.log('Connection Successful');
    // })

    // mongoose.connection.on('disconnected', () => {
    //     console.log('Database not connected');
    // })

    // mongoose.connection.on('error', (error) => {
    //     console.log('Error while connecting the database', error.message);
    // })
}

export default Connection;
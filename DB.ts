import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";


// connecting to mongCleint server
const client=new MongoClient;
// Connection 
client.connectWithUri("mongodb://localhost:27017");
// Database
const db=client.database("denoFirst")
    
export default db;


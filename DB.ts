import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
// Using .env file
import {load} from "https://deno.land/x/denv/mod.ts";
await load("./.env")



const dbHost=Deno.env.get("DB_HOST") || "mongodb://localhost:27017";
const dbName=Deno.env.get("DB_NAME") || "denoFirst";
// connecting to mongCleint server
const client=new MongoClient;



// Connection 
client.connectWithUri(dbHost);
// Database

const db=client.database(dbName)
console.log("Connection Successfully to Database:",dbName)



    
export default db;


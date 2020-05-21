import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";



console.log(Deno.env.get("DB_HOST"))
const dbHost=Deno.env.get("DB_HOST") || "mongodb://localhost:27017";
const dbName=Deno.env.get("DB_NAME") || "denoFirst";
// connecting to mongCleint server
const client=new MongoClient;
let db;

try{
// Connection 
client.connectWithUri(dbHost);
// Database
db=client.database(dbName)
console.log("Connection Successfully to Database:",dbName)

}
catch(err){
    console.log(err)
}


    
export default db;


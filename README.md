# Deno-MongoDB REST API
Basic CRUD operations using the  Deno backend framework and MongoDB database

Deno's Third Party modules used -
1. OAK (https://deno.land/x/oak/mod.ts) - similar to Koala frameword for nodejs
2. denv (https://deno.land/x/denv/mod.ts)- for .env files
3. mongo (https://deno.land/x/mongo@v0.7.0/mod.ts) - for MongoClient
## Requirements
You must have deno version-1.0 install on your system to run the app
## Running
```
deno run --allow-net --allow-write --allow-read --allow-plugin  --allow-env --unstable server.ts
```
Flags are used while running ,to allow access for networks and access to disk and env since deno blocks it by deafult .
## Routes
```
GET     /api/products
GET     /api/products/:id
POST    /api/products
PUT     /api/products/:id
DELETE  /api/products/:id
```

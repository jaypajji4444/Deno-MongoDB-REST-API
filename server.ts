import {Application } from "https://deno.land/x/oak/mod.ts";


import router from "./routes/routes.ts";

const app = new Application()
const port=8080 

// Middlewares
app.use(router.routes())
app.use(router.allowedMethods())

console.log("Server is up on port",port)
app.listen({port})


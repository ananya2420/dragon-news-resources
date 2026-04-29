//import dns from "node:dns";
//dns.setServers(['8.8.8.8', '8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URL);

let db;

async function initDB() {
  if (!db) {
    await client.connect(); 
    db = client.db("dragon-news");
    //console.log("✅ MongoDB connected");
  }
  return db;
}

const database = await initDB();

export const auth = betterAuth({
  database: mongodbAdapter(database, {
    client, 
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET, 
        }, 
    },
});

//IrAD73T9kB0qcseN(password)
//user:dragon-news
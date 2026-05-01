
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// Global cache to avoid reconnecting on every request (important in dev with HMR)
let client = null;
let authInstance = null;

async function getMongoClient() {
    if (client) return client;

    if (!process.env.TILES_GALLARY_DB_URI) {
        throw new Error("Missing env variable: TILES_GALLARY_DB_URI");
    }

    client = new MongoClient(process.env.TILES_GALLARY_DB_URI, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
    });

    await client.connect();
    console.log("✅ MongoDB connected for Better-Auth");
    return client;
}

export async function getAuth() {
    if (authInstance) return authInstance;

    const mongoClient = await getMongoClient();
    const db = mongoClient.db("tiles-gallery-db");

    authInstance = betterAuth({
        secret: process.env.BETTER_AUTH_SECRET,

        database: mongodbAdapter(db, {
            client: mongoClient,
        }),

        emailAndPassword: {
            enabled: true,
            // autoSignIn: true,        // uncomment if you want auto login after signup
        },
    });

    return authInstance;
}
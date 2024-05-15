import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGO_URI as string
const database = process.env.MONGO_DB_NAME || "McDonald"; 

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const db = client.db(database);
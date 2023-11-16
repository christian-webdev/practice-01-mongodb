import { MongoClient } from "mongodb";
import dotenv from "dotenv"; //dotenv library is used to load the environment variables from .env file
dotenv.config();

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;

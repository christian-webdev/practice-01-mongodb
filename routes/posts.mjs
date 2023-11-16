import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("posts");
  let results = await collection.find({}).limit(2).toArray();
  return res.send(results).status(200);
});

export default router;

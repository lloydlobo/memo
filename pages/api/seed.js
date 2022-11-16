import User from "../../models/User";
import db from "../../utils/db";
import data from "../../utils/data";

/**
 * handler seeds mongoDB at /api/seed endpoint.
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
// https://youtu.be/_IBlyR5mRzA?t=8661
async function handler(req, res) {
  await db.connect();

  await User.deleteMany();
  await User.insertMany(data.users);

  await db.disconnect();

  res.send({
    message: "api: seeded successfully",
  });
}

export default handler;

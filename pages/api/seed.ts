import User from "../../models/User";
import db from "../../lib/api/db";
import data from "../../lib/local/data";

/**
 * handler seeds mongoDB at /api/seed endpoint.
 * Description
 * @param {any} req
 * @param {any} res
 * @returns {Promise<void>}
 */
// NOTE: destructuring parameters causes error.
// https://youtu.be/_IBlyR5mRzA?t=8661
async function handler(_req: any, res: any): Promise<void> {
    await db.connect();

    await User.deleteMany();
    await User.insertMany(data.users);

    await db.disconnect();

    res.send({
        message: "api: seeded successfully",
    });
}

export default handler;

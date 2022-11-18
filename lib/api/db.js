import mongoose from "mongoose";

// https://youtu.be/_IBlyR5mRzA?t=8028
const connection = {};

/**
 * Connect to the database.
 *
 * @return {Promise}
 */
async function connect() {
    if (connection.isConnected) {
        console.log("db: already connected");
        return;
    }

    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;

        if (connection.isConnected === 1) {
            console.log("db: already connected");
            return;
        }

        await mongoose.disconnect();
    }

    const db = await mongoose.connect(process.env.MONGODB_URI);

    console.log("db: use previous connection");
    connection.isConnected = db.connections[0].readyState;
}

/**
 * Disconnect from the database.
 *
 * @returns {Promise<void>}
 */
async function disconnect() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === "production") {
            await mongoose.disconnect();

            connection.isConnected = false;
        } else {
            console.log("db: disconnected");
        }
    }
}

const db = { connect, disconnect };
export default db;

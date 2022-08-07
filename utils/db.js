import mongoose from "mongoose";

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log("Using exisiting 👍 MongoDB connection");
    return;
  }

  if (mongoose.connection.length > 0) {
    connection.isConnected = mongoose.connection[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Using PREVIOUS ⏮️ MongoDB connection ");
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  });
  console.log(`MongoDB connected 🤝 : ${db.connection.host}`);
  connection.isConnected = db.connection.readyState;
}

function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
      console.log("MongoDB 👋  Disconeccted");
    } else {
      console.log(
        "MongoDB will NOT disconect in Dev Server, only in production..."
      );
    }
  }
}

const db = { connect, disconnect, convertDocToObj };
export default db;

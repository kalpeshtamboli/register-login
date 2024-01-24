const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to the MongoDB database using the provided connection string
    const conn = await mongoose.connect(process.env.DB_CONN, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    

    console.log(`MongoDB connected: ${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

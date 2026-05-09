import mongoose from 'mongoose';

// Your MongoDB URL (we appended /virtual_station to define the exact database)
const MONGODB_URI = "mongodb+srv://virtualstation26_db_user:IHlyDF2I95IirwyN@cluster0.o5ggolv.mongodb.net/virtual_station?retryWrites=true&w=majority&appName=Cluster0";

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;

import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://maximilian:aMMFuswMRKAVWG5T@atlascluster.ustohbd.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}

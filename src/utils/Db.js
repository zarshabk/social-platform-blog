import mongoose from "mongoose";

export const DbConnection = async () => {
  try {
    const conn = await mongoose.connection(process.env.MONGO_URL);

    if (conn) {
      console.log("connected with database");
    } else {
      console.log("failed to connect with database");
    }
  } catch (error) {
    console.log(("something went wrong with db connection", error));
  }
};

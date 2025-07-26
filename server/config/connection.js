import mongoose from "mongoose";

const connect = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://vinayanac7777:k1ETmUw5Y0MSiPrm@cluster0.15etn.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
      }
    );
    console.log("Database Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connect;

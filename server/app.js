import express from "express";
import connect from "./config/connection.js";
import userRoute from "./Routes/userRoute.js";
import cors from "cors"
const app = express();
const PORT = 2003;
connect();
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/api/user", userRoute);
app.listen(PORT, () => console.log("OK"));

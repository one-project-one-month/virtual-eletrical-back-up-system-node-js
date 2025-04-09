import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import powerStationRouter from "./routes/powerStationRoutes.js";
import brandRouter from "./routes/brandRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import batteryRouter from "./routes/batteryRoutes.js";
import batteryTypeRouter from "./routes/batteryTypeRoutes.js";
import connectDb from "./database/connectDb.js";
import cors from "cors";

const app = express();

//env config
dotenv.config();
const port = process.env.PORT;
const dbUrl = process.env.DATABASE_URL ?? "mongodb://localhost:27017/vebs";

//middleware
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

//routes
app.use("/api/user", userRouter);
app.use("/api/powerstation", powerStationRouter);
app.use("/api/brand", brandRouter);
app.use("/api/category", categoryRouter);
app.use("/api/battery", batteryRouter);
app.use("/api/battery-type", batteryTypeRouter);

//connectDb
connectDb(dbUrl).then(() => {
  //listen for the requests
  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
});

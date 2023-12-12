import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import UserRouter from "./router/userRouter.js";
import cron from "node-cron";
const app = express();

// parse application/json
app.use(bodyParser.json({ extended: true, limit: "30mb" }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

app.use(cors());
dotenv.config({ path: "config/config.env" });

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// cron.schedule("* * * * * *", () => {
//   console.log("running every second 1, 2, 4 and 5");
// });
cron.schedule("*/5  * * * *", () => {
  console.log("running every five minutes 1, 2, 4 and 5");
});

cron.schedule("45 16 * * *", () => {
  console.log("Running every day at 4:45 PM");
});

var task = cron.schedule(
  "* * * * * *",
  () => {
    console.log("stopped task");
  },
  {
    scheduled: false,
  }
);

task.start();

var task2 = cron.schedule("*/5 * * * * *", () => {
  task.stop();
});

task2.start();

app.use("/api/v1", UserRouter);

// Start the server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

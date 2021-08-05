const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const bloodsRouter = require("./router/bloodsRouter");
const volunteersRouter = require("./router/volunteersRouter");
const eventsRouter = require("./router/eventsRouter");
const reportsRouter = require("./router/ReportsRouter");
const adminRouter = require("./router/adminRouter");

dotenv.config();
const app = express();
app.use(cors());

//database connection
mongoose
  .connect(process.env.MONGO_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));

//request parser
app.use(express.json());

// router handler
app.use("/blood", bloodsRouter);
app.use("/volunteer", volunteersRouter);
app.use("/event", eventsRouter);
app.use("/report", reportsRouter);
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("This is Mayaful server");
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

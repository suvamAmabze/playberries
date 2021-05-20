import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import userRouter from "./routers/userRouter.js";
import FoodProductRouter from "./routers/FoodProductRouter.js";
import contactusRouter from "./routers/contactusRouter.js";
import GalleryProductRouter from "./routers/GalleryProductRouter.js";
import uploadRouter from "./routers/uploadRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DB = process.env.MONGODB_URL;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`DB connection successful`);
  })
  .catch((error) => {
    console.log(`${DB} is getting some error ${error}`);
  });

//Router-:
app.use("/api/uploads", uploadRouter);
app.use("/api/users", userRouter);
app.use("/api/foodproducts", FoodProductRouter);
app.use("/api/orders", orderRouter);
app.use("/api/contactus", contactusRouter);
app.use("/api/gallery", GalleryProductRouter);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

//Error catch middleware, 'expressAsyncHandler' npm module redirect all error to here-:
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

const express = require("express");
const app = express();


const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const userRouter= require("./routes/user");
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.link);

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

const PORT = 5000;

app.listen(PORT, () => console.log(`serve on port ${PORT}`));

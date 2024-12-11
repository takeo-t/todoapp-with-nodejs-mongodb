const express = require("express");
const app = express();
const taskRoutye = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());

const PORT = 5000;

// ルーティングの設定
app.use("/api/v1/tasks", taskRoutye);

// データベースとの接続
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log("サーバーが起動しました"));
  } catch (error) {
    console.log(error);
  }
};

start();

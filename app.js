const express = require("express");
const app = express();
const taskRoutye = require("./routes/tasks");

const PORT = 5000;

// ルーティングの設定
app.use("/api/v1/tasks", taskRoutye);

app.listen(PORT, console.log("サーバーが起動しました"));

const express = require("express");
const app = express();
const PORT = 4000;
const testRouter = require("./router/test");
const cors = require("cors");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));

app.use(cors());

app.use("/test", testRouter);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

const express = require("express");
const router = require("./router")
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
router(app);

app.listen(port, () => {
    console.log("Server is up and listing at Port no. ", port);
});
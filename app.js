const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"))); 

const routes = require("./routes/index");
app.use("/", routes); 


app.listen(3005, () => {
    console.log("Server is listening on port 3005");
});

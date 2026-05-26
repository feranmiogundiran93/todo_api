const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require("./routes/todoRoutes.js");
const live_url = "mongodb+srv://bamisioluwaferanmi_db_user:aanuoluwapO93@cluster0.gftucoa.mongodb.net/AuthenticationDB?appName=Cluster0";
const local_url = "mongodb://localhost:27017/UserDB";

mongoose
.connect(local_url)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("Connection Error: ", err));

const app = express();
app.use(cors());
app.use(express.json());
app.use("/todos", router);

app.get('/', (req, res) => {res.send('Hello World');});
const port = 3000;
app.listen(port, () => {console.log(`Server is running on port ${port}`);});
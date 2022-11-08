const express = require("express")
const cors = require("cors")
// importing express

// initializing express
const app = express()

const port = 5000

const userRouter = require("./routers/userRouter")
const datasetRouter = require("./routers/datasetRouter")
const utilRouter = require("./routers/util")

// to allow react frontend to access the backend
app.use(cors({ origin: ["http://localhost:3000"] }))
app.use(express.json())

// middleware
app.use("/user", userRouter)
app.use("/dataset", datasetRouter)
app.use("/util", utilRouter)

// creating a route of endpoint
app.get("/", (req, res) => {
  res.send("request accepted on/")
})
app.get("/home", (req, res) => {
  res.send("request accepted on /home")
})

app.use(express.static('./static/uploads'));

// starting the server
app.listen(port, () => {
  console.log("express server started")
})

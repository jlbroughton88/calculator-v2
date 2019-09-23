const express = require("express")
const app = express();
const path = require("path")

// MUST UPDATE BUILD FOLDER WHENEVER I PUSH TO HEROKU
// run this in the client folder....npm run build
app.use(express.static(path.join(__dirname, "client/build")))

app.get("/", (req, res) => {
    res.send("Calculator server")
})


app.listen(process.env.PORT || 3007, () => {
    console.log("Server listening on port 3007")
})
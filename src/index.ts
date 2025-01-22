import express from 'express'

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
  res.send("Hello!")
})

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});




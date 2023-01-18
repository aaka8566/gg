import express from "express"
const app = express()
const port =process.env.PORT|| 3000;
const dataa={
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
app.get('/', (req, res) => {
  res.send(dataa)
});
app.get('/tar', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
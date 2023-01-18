import express from "express";
import cors from "cors";
const app = express()
const port =process.env.PORT|| 8000;
app.use(express.json());
// 
app.use(cors());
const posts={
  "postings": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
}
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
});
app.get('/postings', (req, res) => {
  res.send(posts);
});
app.post('/postings', (req, res) => {
  const {dat}=req.body;
  posts.postings.push(dat);
  res.send(posts)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
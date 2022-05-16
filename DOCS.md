## Installation

```js
const Dc = require('package-name');
const dc = new Dc();
```

## Registering posts
```js
function sendPost(post) {
  dc.emit('post',post);
}
dc.on('validatedPost',(post)=>{
  //what you want to do with the post
  //eg save it into a database
})
```

### Example usage with Express and Mongoose:
```js
app.post('/newpost',(req,res)=>{
  dc.emit('post',req.body);
  res.redirect('/posts');
);
dc.on('validatedPost',(post)=>{
  let p = new Post(post);
  p.save();
});
app.get('/posts',(req,res)=>{
  Post.find({}).then(posts=>{
    res.json(posts)
  });
});
```
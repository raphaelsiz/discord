## Installation

```js
const Dc = require('package-name');
const dc = new Dc();
```

## Registering posts
### The absolute bare minimum:
```js
function sendPost(post) {
  dc.emit('post',dc.validatePost(post));
}
```
The function Dc.prototype.validatePost(post,callback,catch) also can be given a callback and a catch. This is highly recommended! It will be needed to save posts, and can be useful for debugging.

### An extremely simple example (that doesn't save the post) with a callback and catch:
```js
dc.validatePost(post,
  (post)=> console.log("post by " + post.user + " is okay!"),
  (err)=> console.error(err)
);
```

### Example usage with Express and Mongoose that saves and shows user-generated posts:
```js
const express = require('express');
const app = express();
const Dc = require('package-name');
const dc = new Dc();
app.post('/newpost',(req,res)=>{
  dc.emit('post',validate(req.body));
  res.redirect('/posts');
);
function validate(post) {
  dc.validatePost(post,)
}
app.get('/posts',(req,res)=>{
  Post.find({}).then(posts=>{
    res.json(posts)
  });
});
```
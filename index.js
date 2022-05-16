const EventEmitter = require('node:events');
const express = require('express');
const app = express();

class CustomEmitter extends EventEmitter {
  validatePost(post,callback=()=>{},catch=()=>{}) {
    if () {callback()} else catch();
  }
}

/*const myEmitter = new MyEmitter();

myEmitter.once('newListener', (event, listener) => {
console.log("new listener");
});

myEmitter.on('event',()=>{
console.log("event")
});

myEmitter.emit('event');*/

function defaultExportEmitter() {
	const emitter = new EventEmitter();
	emitter.on('post',(post)=>{
		let newPost = post
		emitter.emit('validatedPost',post);
	})
	emitter.router = app;
	return emitter;
}

app.get('/',(req,res)=>{
	
});

module.exports = exports = defaultExportEmitter;

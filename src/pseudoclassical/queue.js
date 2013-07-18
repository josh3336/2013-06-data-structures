var Queue = function (){
  this.storage=[];
};

Queue.prototype.add = function(value){
  this.storage.push(value);
};

Queue.prototype.remove = function(){
  return this.storage.shift();
};



var EnhancedQueue = function(){
  Queue.apply(this);
}


EnhancedQueue.prototype = Object.create(Queue.prototype);
EnhancedQueue.constructor=EnhancedQueue

EnhancedQueue.prototype.grow = function(){
  this.storage.push(this.storage)
}
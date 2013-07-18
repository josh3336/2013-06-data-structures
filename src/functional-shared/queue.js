var sharedStuff = {
  remove: function(){
    return this.storage.shift();
  },
  add: function(val){
    this.storage.push(val);
  }
};

var MakeQueue= function(){
  var queue={};
  queue.storage=[];

  queue.add = sharedStuff.add;
  queue.remove = sharedStuff.remove;

  return queue;
};



var sharedmethods={
  add: function(val){
    this.storage.push(val);
  },
  remove: function(val){
    return this.storage.pop(val);
  }
};

var MakeStack = function(){
  stack={};
  stack.storage=[];
  stack.add= sharedmethods.add;
  stack.remove=sharedmethods.remove;

  return stack;
};
var makeStack = function(){
  var storage=[];
  var stack={};

  stack.add= function(val){
    storage.push(val);
  };


  stack.remove= function(val){
    return storage.pop();
  };

  return stack;
};
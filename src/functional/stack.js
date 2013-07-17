var MakeStack = function (){
  stack={};
  stack.storage=[];

  stack.add = function (value){
    this.storage.push(value);
  };
  stack.remove = function(){
    return this.storage.pop();
  };


  return stack;
};
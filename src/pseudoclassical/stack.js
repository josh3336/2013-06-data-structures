var Stack = function (){
  this.storage=[];
};

Stack.prototype.add = function(val){
  this.storage.push(val);
};

Stack.prototype.remove = function(val){
  return this.storage.pop();
};
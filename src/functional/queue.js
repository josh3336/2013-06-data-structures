var MakeQueue= function(){
  var queue={};
  storage=[];
  var remove = remove || function(){
    return storage.shift();
  };
  queue.add = function(val){
    storage.push(val);
  };
  queue.remove = remove;

  return queue;
};


var MakeQueue= function(){
  queue={};
  queue.storage=[];
  queue.add = function(val){
    queue.storage.push(val);
  };
  queue.remove = function(){
    return queue.storage.shift();
  };

  return queue;
};


var MakeQueue= function(){
  queue={};
  storage=[];
  queue.add = function(val){
    storage.push(val);
  };
  queue.remove = function(){
    return storage.shift();
  };

  return queue;
};
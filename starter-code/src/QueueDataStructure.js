function QueueDataStructure () {
  this.queueControl =[];
  this.MAX_SIZE = 8;

  this.isEmpty= function(){
    
    if(this.queueControl.length ===0){
      return true
    }
    else{
      return false
    }
  }
  this.canEnqueue = function(){
    if (this.queueControl.length >= this.MAX_SIZE){
      return false
    }
    return true
  }
  this.enqueue = function(elem){


    if (this.canEnqueue()){
      this.queueControl.unshift(elem);
      return this.queueControl;
    }
  else{
    return "Queue Overflow";

  }
  }

  this.dequeue= function () {

    if (this.isEmpty()){
    return "Queue Underflow";
  }
  else{
    this.queueControl.pop(); 
  }
   
  }

  }


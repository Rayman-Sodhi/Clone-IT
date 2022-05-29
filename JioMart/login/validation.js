function validate(){
    var patt=[6,7,8,9];
    var x= document.getElementById("mobile").value;
    var bool = false;
    for(var a of patt)    
    {
      var i= x[0];
      if(i==a && x.length==10)
      {
        bool=true;
        break;
      }
    }
    if(bool===false)
    {
      document.getElementById("err").className="text-danger errtrigger";
      return;
    }
    else{
      document.getElementById("err").className="text-danger error";
    }

    
  }
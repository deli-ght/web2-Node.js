function a(){
  console.log("A");
}


//익명함
var a = function() {
  console.log("A2");
}

a();

function showFunc(callback){
  callback;
}

showFunc(a);

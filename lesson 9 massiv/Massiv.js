var array = [];
var stopProgram = "-1";
var index = 0;
function start(){
              
    while (true){
    var user = readInt(" Your number ");
        array[index] = user;
    if (user == stopProgram){
        println(" Program stoped ");
                break;
                
    }
        index++;     

    
    }
        printArray(array);
}


function printArray(array){
    
    for(var i = 0; i < array.length; i++){
        println(array[i]);



}
}
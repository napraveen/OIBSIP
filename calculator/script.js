let result = document.getElementById("result");
function display(num){
result.value += num;
}

function answer(){
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("Error");
    }

}
function Clear(){
    result.value="";
}
function del(){
    result.value=result.value.slice(0,-1);
}
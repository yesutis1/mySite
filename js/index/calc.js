
var myCalcArea = {
    value : "",     // 계산 내용
    values : "",    // 계산 결과
    keyValue : document.getElementById("resultBlank"),
    histContent : "",   //계산 내용
    histValue : "",     //계산 결과
    histResult : []     //계산 기록
}

function add(num){
    if(num === '') myCalcArea.value = "";
    myCalcArea.value += num;
    // 입력한 숫자 디스플레이로 화면 출력
    var display = document.getElementById("resultBlank");
    display.value = myCalcArea.value;
    console.log(myCalcArea.value);
}	
function del(){
    myCalcArea.value = myCalcArea.value.slice(0,-1);
    var display = document.getElementById("resultBlank");
    display.value = myCalcArea.value;
}

function answer(){
    
    if(myCalcArea.keyValue.value){
        myCalcArea.values = eval(myCalcArea.keyValue.value);
        // 결과값 디스플레이로 출력
        var display = document.getElementById("resultBlank");
        display.value = myCalcArea.keyValue.value +" = "+myCalcArea.values;
        history();
        myCalcArea.value=""+myCalcArea.values;
    }else{
        try{
            myCalcArea.values = eval(myCalcArea.value);
            // 결과값 디스플레이로 출력
            var display = document.getElementById("resultBlank");
            display.value = myCalcArea.value +" = "+myCalcArea.values;
            // myCalcArea.value=myCalcArea.values;
        }catch(e){alert("계산 오류")}
    }
}

function clear(){
    myCalcArea.value = "";
    var display = document.getElementById("resultBlank");
    display.value = myCalcArea.value;
}

function history(){
    myCalcArea.histContent = myCalcArea.value;
    myCalcArea.histValue = myCalcArea.values;
    myCalcArea.histResult += "→ " + myCalcArea.histContent + " = " +myCalcArea.histValue + "\n";
    var historyContent = document.getElementById("resultCalc");
    historyContent.value = myCalcArea.histResult;
}



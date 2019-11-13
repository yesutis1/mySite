// 새창으로 열기
// var img = document.getElementsByTagName("img");
//     for (var x = 0; x < img.length; x++) {
//       img.item(x).onclick=function() {window.open(this.src)}; 
//     }

var myHideArea = {
    name :"img",
    closeName : "img",
    leftName : "img",
    leftNameC : "img",
    rightName : "img",
    rightNameC : "img"
}
var name ="img";
function loadImg(num){
    this.input = num;
    myHideArea.name += input;
    console.log(myHideArea.name);
    var elImg = document.getElementById(myHideArea.name);
    elImg.classList.toggle('addImg');
    myHideArea.name ="img";
}

function closeImg(cNum){
    this.inputC = cNum;
    myHideArea.closeName += inputC;
    var close = document.getElementById(myHideArea.closeName);
    close.classList.remove('addImg')
    myHideArea.closeName ="img";
}


function leftImg(lNum){
    this.inputL = lNum -1 ;
    this.inputLC = lNum;
    console.log(inputL);
    console.log(inputLC);
    myHideArea.leftName +=inputL;
    myHideArea.leftNameC += inputLC;
    console.log(myHideArea.leftName);
    console.log(myHideArea.leftNameC);

    var leftEl = document.getElementById(myHideArea.leftNameC);
    leftEl.classList.remove('addImg');

    leftEl = document.getElementById(myHideArea.leftName);
    leftEl.classList.toggle('addImg')
    
    myHideArea.leftName = "img";
    myHideArea.leftNameC = "img";
}


function rightImg(rNum){
    this.inputR = rNum +1 ;
    this.inputRC = rNum;
    console.log(inputR);
    console.log(inputRC);
    myHideArea.rightName +=inputR;
    myHideArea.rightNameC += inputRC;
    console.log(myHideArea.rightName);
    console.log(myHideArea.rightNameC);

    var rightEl = document.getElementById(myHideArea.rightNameC);
    rightEl.classList.remove('addImg');

    rightEl = document.getElementById(myHideArea.rightName);
    rightEl.classList.toggle('addImg')
    
    myHideArea.rightName = "img";
    myHideArea.rightNameC = "img";
}

function noImg(param){
    if(param) {
        alert("왼쪽에 더이상 이미지가 없습니다")
    }
    else{
        alert("오른쪽에 더이상 이미지가 없습니다")
    }
}
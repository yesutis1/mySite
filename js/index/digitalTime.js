
var canvas = document.getElementById("digitalClock");
var digitalCtx = canvas.getContext("2d");

var time;
var timeColor = 'yellow';
var backgroundColor = 'rgba(100,100,100,1)';

digitalCtx.beginPath();
digitalCtx.strokeRect(10,10,60,60);

digitalCtx.font='100px digital';
digitalCtx.strokeStyle = timeColor;
// digitalCtx.Baseline = 'hanging';

setInterval(now,20);

function now(){
    digitalCtx.clearRect(0,0,600,240);
    digitalCtx.fillStyle = 'rgba(100,100,100,1)';
    digitalCtx.fillRect(0,0,canvas.width,240);
    // 시간 계산 함수
    calcTime();
    //캔바스에 출력하기
    digitalCtx.font='100px digital';
    digitalCtx.strokeStyle = timeColor;
    timeHour();
    timeMin();
    timeSec();
    timeCircle();
    amPm();
}

function calcTime(){
    dNow = new Date();
    hours = dNow.getHours();
    mins = dNow.getMinutes();
    secs = dNow.getSeconds();
    // if(hours>12) hours -=12;
}
function timeHour(){
    var hourX=30;
    if(hours<10) {
        hourX +=50;
        digitalCtx.strokeText(hours,hourX,120);
        hourX -=50;
    }else{
        digitalCtx.strokeText(hours,hourX,120);
    }
}
function timeMin(){
    var minX=190;
    if(mins<10){
        digitalCtx.strokeText(0,minX,120);
        minX +=60;
        digitalCtx.strokeText(mins,minX,120);
        minX -=50;
    } else{
        digitalCtx.strokeText(mins,minX,120);
    }
}
function timeSec(){
    var secX=350;
    if(secs<10) {
        digitalCtx.strokeText(0,secX,120);
        secX +=60;
        digitalCtx.strokeText(secs,secX,120);
        secX -=50;
    } else{
        digitalCtx.strokeText(secs,secX,120);
    }
}

function timeCircle(){
    var cirX = 170;
    var cirY = 80;
    digitalCtx.beginPath();
    //
    digitalCtx.arc(cirX,cirY,5,0,2*Math.PI);
    digitalCtx.arc(cirX,cirY+20,5,0,2*Math.PI);
    digitalCtx.fillStyle = timeColor;
    digitalCtx.fill();
    //
    digitalCtx.beginPath();
    digitalCtx.arc(cirX+160,cirY,5,0,2*Math.PI);
    digitalCtx.arc(cirX+160,cirY+20,5,0,2*Math.PI);
    digitalCtx.fill();
}

function amPm(){
    var amPmX = 500;
    dNow = new Date();
    nowhour = dNow.getHours();
    digitalCtx.font='50px digital';
    if(nowhour<12) digitalCtx.strokeText("AM",amPmX,120);
    if(nowhour>=12) digitalCtx.strokeText("PM",amPmX,120);
}

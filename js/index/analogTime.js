var canvas = document.getElementById("analogClock");
analogCtx = canvas.getContext("2d");  //2d 관련 속성을 사용 할 수 있게 됨
var radius = canvas.height / 2;
analogCtx.translate(radius,radius);
radius = radius*0.9;

setInterval(runtime,1000);  //1000은 1초를 의미
// 1초마다 실행
function runtime(){
    drawClock();
    drawNum();
    drawTime();
}

function drawClock(){
    analogCtx.beginPath();
    analogCtx.arc(0, 0, radius, 0, 2*Math.PI); //0,0 부터 radius,0 까지 2*Math.PI만큼
    // Math.PI 는 180도 의 반원이기 때문에 *2하면 원을 그림
    analogCtx.fillStyle="white";
    analogCtx.fill();

    var grad = analogCtx.createRadialGradient(0, 0, radius*0.95, 0, 0, radius*1.05); //마지막은 선의 두께
    grad.addColorStop(0,'lightblue');
    grad.addColorStop(0.5,'white')
    grad.addColorStop(1,'lightblue');
    analogCtx.strokeStyle = grad;
    analogCtx.lineWidth = radius*0.1;
    analogCtx.stroke();

    analogCtx.beginPath();
    analogCtx.arc(0, 0, radius*0.07, 0, 2*Math.PI);
    analogCtx.fillStyle='skyblue'
    analogCtx.fill();
}

function drawNum(){
    var angle;
    analogCtx.font = radius*0.15 + "px arial";  // ctx.font = "12px arial"
    analogCtx.textBaseline = "middle";
    analogCtx.textAlign = "center";
    analogCtx.fillStyle="darkblue";
    for(var num=1; num<13; num++){
        angle = num * Math.PI/6;
        analogCtx.rotate(angle);
        analogCtx.translate(0,-radius*0.85);
        analogCtx.rotate(-angle);
        analogCtx.fillText(num,0,0);
        analogCtx.rotate(angle);
        analogCtx.translate(0,radius*0.85);
        analogCtx.rotate(-angle);
    }
}

function drawHand(pos,length,width){
    analogCtx.beginPath();
    analogCtx.lineWidth = width;
    analogCtx.lineCap = "round";
    analogCtx.moveTo(0,0);
    analogCtx.rotate(pos);
    analogCtx.lineTo(0,-length);
    analogCtx.strokeStyle = "skyblue";
    analogCtx.stroke();
    analogCtx.rotate(-pos);
}

function drawTime(){
    now = new Date();
    hour = now.getHours();
    min = now.getMinutes();
    sec = now.getSeconds();
    // 시
    hour = hour%12;     //18시는 12로 나누어 나머지가 6이 된다.
    hour = (hour*Math.PI/6) + (min*Math.PI/(6*60)) + (sec*Math.PI/(6*60*60));
    drawHand(hour, radius*0.5,radius*0.07);
    min = (min*Math.PI/30) + (sec*Math.PI/(30*60));
    drawHand(min,radius*0.65,radius*0.07);
    sec = (sec*Math.PI/30);
    drawHand(sec,radius*0.7,radius*0.01);
}
startGames = function() {
    console.log(this.myGameArea.message.docIsReady);
    this.myGameArea.start();
    var len = 0;
    this.endX = 418;
    this.endY = 418;
    this.myGamePiece = new Component(20, 20, "red", 0, 0);
    for(var i = 0; i < 20; i++) {
        for(var j = 0; j < 20; j++) {
            this.myGamePiece[len] = new block(20, 20, "#ccc", 22 * j, 22 * i);
            len++;
        }
    }

    // for(var j = 0; j < 21; j++) {
    //     for(var i = 0; i < 6; i++) {
    //         var ran = Math.floor(Math.random()*19 + 1+j*19);
    //         this.myGamePiece[ran] = new block(20, 20, "#333", myGamePiece[ran].x, myGamePiece[ran].y);
    //     }
    // }
       
}

// 환경정보를 가진 객체
var myGameArea = {
    canvas: document.createElement('canvas'),
    message: {
        docIsReady: "문서가 준비되었습니다."
    },
    keys: [],
    time :0,
    score:0,
    heart:10,
    trapNum : 1,
    roundNum : 1,
    roundSub : 1,
    trapTime : 260,
    start: function() {
        // this.canvas.width = 450;
        // this.canvas.height = 450;
        // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.canvas = document.getElementById("canvas");

        this.context = this.canvas.getContext("2d");

        this.interval = setInterval(gameTime, 20); // 초당 50번 호출

        this.controller = document.querySelectorAll("#controll > button");
        for(var i = 0; i < this.controller.length; i++) {
            this.controller[i].addEventListener('mousedown', function() { myGameArea.myFn(this); });
            this.controller[i].addEventListener('mouseup', moveClear);
        }

        window.addEventListener('keydown', function(e){
            // myGameArea.keys가 없으면 새로 만들기
            myGameArea.keys = (myGameArea.keys || []);

            myGameArea.keys[e.keyCode] = (e.type == "keydown");

            if(myGameArea.keys && myGameArea.keys[39]) {
                if(myGamePiece.x == 418 || myGamePiece[myGamePiece.x/22 + 1 + (myGamePiece.y/22)*20].color == "#333") {
                    // return false;
                    myGameArea.heart -= 1;
                    myGamePiece.x = 220; myGamePiece.y = 220
                }
                else {
                    myGamePiece.x += 22;
                }
            }
            if(myGameArea.keys && myGameArea.keys[38]) {
                if(myGamePiece.y == 0 || myGamePiece[myGamePiece.x/22 + (myGamePiece.y/22 - 1)*20].color == "#333") {
                    // return false;
                    myGameArea.heart -= 1;
                    myGamePiece.x = 220; myGamePiece.y = 220
                }
                else {
                    myGamePiece.y += -22;
                }
            }
            if(myGameArea.keys && myGameArea.keys[37]) {
                if(myGamePiece.x == 0 || myGamePiece[myGamePiece.x/22 - 1 + (myGamePiece.y/22)*20].color == "#333") {
                    // return false;
                    myGameArea.heart -= 1;
                    myGamePiece.x = 220; myGamePiece.y = 220
                }
                else {
                    myGamePiece.x += -22;
                }
            }
            if(myGameArea.keys && myGameArea.keys[40]) {
                if(myGamePiece.y == 418 || myGamePiece[myGamePiece.x/22 + (myGamePiece.y/22 + 1)*20].color == "#333") {
                    // return false;
                    myGameArea.heart -= 1;
                    myGamePiece.x = 220; myGamePiece.y = 220
                }
                else {
                    myGamePiece.y += 22;
                }
            }
        });
        window.addEventListener('keyup', function(e){
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
            moveClear();
        });
        
    },
    restart: function(){
        if(myGamePiece.x == endX && myGamePiece.y == endY){
            console.log(myGameArea.time, myGameArea.trapTime, myGameArea.score, myGameArea.heart, myGameArea.trapNum, myGameArea.roundNum, myGameArea.roundSub)
            myGameArea.score += 50; 
            if(myGameArea.roundSub>9){
                myGameArea.trapTime = 260; 
                myGameArea.trapNum++; 
                myGameArea.roundNum++; 
                myGameArea.roundSub = 1
                if(myGamePiece.see>300)myGamePiece.see = 200 + myGameArea.roundNum*50;
            }
            else if(myGameArea.roundSub>0){
                if(myGameArea.trapTime == 100){myGameArea.trapTime = myGameArea.trapTime;}
                else{myGameArea.trapTime -=20; } 
                myGameArea.roundSub++; 
            }
            console.log(myGameArea.time, myGameArea.trapNum);
            for(var i = 0; i < 400; i++) {
                myGamePiece[i].color = "#ccc";
                myGamePiece[i].update();
            }
            endX = Math.floor(Math.random()*19)*22;
            endY = Math.floor(Math.random()*19)*22;
        }
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // 0, 0에서 canvas 영역만큼 clear
    },
    myFn: function(param) {
        var el = param.innerHTML;
        if(el == "상") {
            moveUp();
        }
        else if(el == "하") {
            moveDown();
        }
        else if(el == "좌") {
            moveLeft();
        }
        else if(el == "우") {
            moveRight();
        }
    }
}

function gameTime(){
    updateGameArea();
    if(myGameArea.time > myGameArea.trapTime){
        trap();
        myGameArea.time = 0;
    }
    myGameArea.time++;
}

// 새로운 블록개체에서 랜덤으로 선택해서 트랩으로 지정
function trap(){
    for(var j = 0; j < 21; j++) {
        for(var i = 0; i < 1; i++) {
            var ran = Math.floor(Math.random()*19 + 1+j*19);
            if(myGamePiece[ran].x == endX &&  myGamePiece[ran].y == endY)return trap();
            this.myGamePiece[ran] = new block(20, 20, "#333", myGamePiece[ran].x, myGamePiece[ran].y);
        }
    }
}

// 컴포넌트 생성자 함수
function Component(width, height, color, x, y) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.see = 0;
    this.update = function() {
        var ctx = myGameArea.context;
        ctx.beginPath();
        ctx.fillStyle = this.color; // 색 채우기
        ctx.fillRect(this.x, this.y, this.width, this.height); // 75, 75에 가서 width 50 height 50인 박스 그리기
        ctx.beginPath();
        ctx.strokeStyle ="#444";
        ctx.lineWidth = this.see;
        ctx.arc(this.x+10, this.y+10,620,0,2*Math.PI);
        ctx.stroke();
    }
}

// 컴포넌트 생성자 함수
function block(width, height, color, x, y) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;

    this.update = function() {
        var ctx = myGameArea.context;
        ctx.beginPath();
        ctx.fillStyle = this.color; // 색 채우기
        ctx.fillRect(this.x, this.y, this.width, this.height); // 75, 75에 가서 width 50 height 50인 박스 그리기
    }
}

function updateGameArea() {
    var el = document.getElementById("playing");
    el.innerHTML = "점수 : "+myGameArea.score+" | Heart : "+myGameArea.heart+" | Round : "+myGameArea.roundNum
    +" | "+myGameArea.roundSub+"/10";
    //타일 리셋
    myGameArea.clear();
    //타일 생성    
    for(var i = 0; i < 400; i++) {
        myGamePiece[i].update();
    }
    // 끝점
    endPoint = new block(20,20,"yellow",endX,endY);
    endPoint.update();
    // 시야 좁아짐
    if(myGamePiece.see == 1100){myGamePiece.see = 1100}
    else{myGamePiece.see +=1}
    myGamePiece.update();   //컨트롤하는 객체
    myGameArea.restart();
    if(myGameArea.heart == 0){
        alert("게임 끝, 다시 하고 싶으면 F5를 눌러 새로 시작하세요")
        myGameArea.heart = 10;
    };
}

function moveRight() {
    if(myGamePiece.x == 418 || myGamePiece[myGamePiece.x/22 + 1 + (myGamePiece.y/22)*20].color == "#333") {
        return false;
    } else {
        myGamePiece.x += 22;
    }

}
function moveLeft() {
    if(myGamePiece.x == 0 || myGamePiece[myGamePiece.x/22 - 1 + (myGamePiece.y/22)*20].color == "#333") {
        return false;
    } else {
        myGamePiece.x += -22;
    }
}
function moveUp() {
    if(myGamePiece.y == 0 || myGamePiece[myGamePiece.x/22 + (myGamePiece.y/22 - 1)*20].color == "#333") {
        return false;
    } else {
        myGamePiece.y += -22;
    }
}
function moveDown() {
    if(myGamePiece.y == 418 || myGamePiece[myGamePiece.x/22 + (myGamePiece.y/22 + 1)*20].color == "#333") {
        return false;
    } else {
        myGamePiece.y += 22;
    }
}
function moveClear() {
    myGamePiece.x = myGamePiece.x;
    myGamePiece.y = myGamePiece.y;
}
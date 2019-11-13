// 문서가 load되면 실행
window.onload = function() {
    console.log(this.myGameArea.message.docIsReady);
    this.myGameArea.start();
    var len = 0;
    this.myGamePiece = new Component(20, 20, "red", 0, 0);

    for(var i = 0; i < 20; i++) {
        for(var j = 0; j < 20; j++) {
            this.myGamePiece[len] = new Component(20, 20, "#bbb", 22 * j, 22 * i);
            len++;
        }
    }

    for(var j = 0; j < 21; j++) {
        for(var i = 0; i < 8; i++) {
            var ran = Math.floor(Math.random()*19 + 1+j*19);
            this.myGamePiece[ran] = new Component(20, 20, "#333", myGamePiece[ran].x, myGamePiece[ran].y);
        }
    }
}

// 환경정보를 가진 객체
var myGameArea = {
    canvas: document.createElement('canvas'),
    message: {
        docIsReady: "문서가 준비되었습니다."
    },
    keys: [],
    start: function() {
        // this.canvas.width = 450;
        // this.canvas.height = 450;
        // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.canvas = document.getElementById("canvas");

        this.context = this.canvas.getContext("2d");

        this.interval = setInterval(updateGameArea, 20); // 초당 50번 호출

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
                    return false;
                }
                else {
                    myGamePiece.x += 22;
                }
            }
            if(myGameArea.keys && myGameArea.keys[38]) {
                if(myGamePiece.y == 0 || myGamePiece[myGamePiece.x/22 + (myGamePiece.y/22 - 1)*20].color == "#333") {
                    return false;
                }
                else {
                    myGamePiece.y += -22;
                }
            }
            if(myGameArea.keys && myGameArea.keys[37]) {
                if(myGamePiece.x == 0 || myGamePiece[myGamePiece.x/22 - 1 + (myGamePiece.y/22)*20].color == "#333") {
                    return false;
                }
                else {
                    myGamePiece.x += -22;
                }
            }
            if(myGameArea.keys && myGameArea.keys[40]) {
                if(myGamePiece.y == 418 || myGamePiece[myGamePiece.x/22 + (myGamePiece.y/22 + 1)*20].color == "#333") {
                    return false;
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

// 컴포넌트 생성자 함수
function Component(width, height, color, x, y) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;

    this.update = function() {
        var ctx = myGameArea.context;
        ctx.beginPath();
        ctx.fillStyle = color; // 색 채우기
        ctx.fillRect(this.x, this.y, this.width, this.height); // 75, 75에 가서 width 50 height 50인 박스 그리기
    }

}

function updateGameArea() {
    myGameArea.clear();    

    for(var i = 0; i < 400; i++) {
        myGamePiece[i].update();
    }
    myGamePiece.update();
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
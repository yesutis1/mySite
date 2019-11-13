// ---- 네비게이션 메뉴바 실행 js ----

    // -- 홈버튼 : 메뉴 전체 닫기 --
    closeMenu = function(){
        //메뉴 active 색 변경
        var activeA = document.getElementById('menuActive1');
        var activeC = document.getElementById('menuActive2');
        var activeT = document.getElementById('menuActive3');
        var activeE = document.getElementById('menuActive4'); 
        activeA.classList.remove("activeMenu1");
        activeC.classList.remove("activeMenu2");
        activeT.classList.remove("activeMenu3");
        activeE.classList.remove("activeMenu4");
        //페이지 숨기기
        var about = document.getElementById('menu1');
        var cal = document.getElementById('menu2');
        var time = document.getElementById('menu3');
        var etc = document.getElementById('menu4');   
        about.classList.remove("menuClass1");
        cal.classList.remove("menuClass2");
        time.classList.remove("menuClass3");
        etc.classList.remove("menuClass4");
    }
    // -- menu1 --
    menu1 = function(){
        //메뉴 active 색 변경
        var activeA = document.getElementById('menuActive1');
        var activeC = document.getElementById('menuActive2');
        var activeT = document.getElementById('menuActive3');
        var activeE = document.getElementById('menuActive4'); 
        activeA.classList.toggle("activeMenu1");
        activeC.classList.remove("activeMenu2");
        activeT.classList.remove("activeMenu3");
        activeE.classList.remove("activeMenu4");
        //숨긴 페이지 표시
        var about = document.getElementById('menu1');
        var cal = document.getElementById('menu2');
        var time = document.getElementById('menu3');
        var etc = document.getElementById('menu4');   
        about.classList.toggle("menuClass1");
        cal.classList.remove("menuClass2");
        time.classList.remove("menuClass3");
        etc.classList.remove("menuClass4");
    };
    // -- menu2 --
    menu2 = function(){
        //메뉴 active 색 변경
        var activeA = document.getElementById('menuActive1');
        var activeC = document.getElementById('menuActive2');
        var activeT = document.getElementById('menuActive3');
        var activeE = document.getElementById('menuActive4'); 
        activeA.classList.remove("activeMenu1");
        activeC.classList.toggle("activeMenu2");
        activeT.classList.remove("activeMenu3");
        activeE.classList.remove("activeMenu4");
        //숨긴 페이지 표시
        var about = document.getElementById('menu1');
        var cal = document.getElementById('menu2');
        var time = document.getElementById('menu3');
        var etc = document.getElementById('menu4');   
        about.classList.remove("menuClass1");
        cal.classList.toggle("menuClass2");
        time.classList.remove("menuClass3");
        etc.classList.remove("menuClass4");
    };
    // -- menu3 --
    menu3 = function(){
        //메뉴 active 색 변경
        var activeA = document.getElementById('menuActive1');
        var activeC = document.getElementById('menuActive2');
        var activeT = document.getElementById('menuActive3');
        var activeE = document.getElementById('menuActive4'); 
        activeA.classList.remove("activeMenu1");
        activeC.classList.remove("activeMenu2");
        activeT.classList.toggle("activeMenu3");
        activeE.classList.remove("activeMenu4");
        //숨긴 페이지 표시
        var about = document.getElementById('menu1');
        var cal = document.getElementById('menu2');
        var time = document.getElementById('menu3');
        var etc = document.getElementById('menu4');   
        about.classList.remove("menuClass1");
        cal.classList.remove("menuClass2");
        time.classList.toggle("menuClass3");
        etc.classList.remove("menuClass4");
    };
    // -- menu4 --
    menu4 = function(){
        //메뉴 active 색 변경
        var activeA = document.getElementById('menuActive1');
        var activeC = document.getElementById('menuActive2');
        var activeT = document.getElementById('menuActive3');
        var activeE = document.getElementById('menuActive4'); 
        activeA.classList.remove("activeMenu1");
        activeC.classList.remove("activeMenu2");
        activeT.classList.remove("activeMenu3");
        activeE.classList.toggle("activeMenu4");
        //숨긴 페이지 표시
        var about = document.getElementById('menu1');
        var cal = document.getElementById('menu2');
        var time = document.getElementById('menu3');
        var etc = document.getElementById('menu4');   
        about.classList.remove("menuClass1");
        cal.classList.remove("menuClass2");
        time.classList.remove("menuClass3");
        etc.classList.toggle("menuClass4");
    };
//
window.onload = function() {
    menu1()
}
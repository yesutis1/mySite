
// ---- 네비게이션 메뉴바 실행 js ----

// -- 홈버튼 : 메뉴 전체 닫기 --
home = function(){
    //메뉴 active 색 변경
    var activeA = document.getElementById('aboutActive');
    var activeC = document.getElementById('calActive');
    var activeT = document.getElementById('timeActive');
    var activeE = document.getElementById('etcActive'); 
    activeA.classList.remove("activeAbout");
    activeC.classList.remove("activeCal");
    activeT.classList.remove("activeTime");
    activeE.classList.remove("activeCal");
    //페이지 숨기기
    var about = document.getElementById('about');
    var cal = document.getElementById('atcCal');
    var time = document.getElementById('atcTime');
    var etc = document.getElementById('etc');   
    about.classList.remove("aboutClass");
    cal.classList.remove("calClass");
    time.classList.remove("timeClass");
    etc.classList.remove("etcClass");
}
// -- about 메뉴 --
about = function(){
    //메뉴 active 색 변경
    var activeA = document.getElementById('aboutActive');
    var activeC = document.getElementById('calActive');
    var activeT = document.getElementById('timeActive');
    var activeE = document.getElementById('etcActive'); 
    activeA.classList.toggle("activeAbout");
    activeC.classList.remove("activeCal");
    activeT.classList.remove("activeTime");
    activeE.classList.remove("activeCal");
    //숨긴 페이지 표시
    var about = document.getElementById('about');
    var cal = document.getElementById('atcCal');
    var time = document.getElementById('atcTime');
    var etc = document.getElementById('etc');   
    about.classList.toggle("aboutClass");
    cal.classList.remove("calClass");
    time.classList.remove("timeClass");
    etc.classList.remove("etcClass");
};
// -- atcCal 메뉴 --
atcCal = function(){
    //메뉴 active 색 변경
    var activeA = document.getElementById('aboutActive');
    var activeC = document.getElementById('calActive');
    var activeT = document.getElementById('timeActive');
    var activeE = document.getElementById('etcActive'); 
    activeA.classList.remove("activeAbout");
    activeC.classList.toggle("activeCal");
    activeT.classList.remove("activeTime");
    activeE.classList.remove("activeCal");
    //숨긴 페이지 표시
    var about = document.getElementById('about');
    var cal = document.getElementById('atcCal');
    var time = document.getElementById('atcTime');
    var etc = document.getElementById('etc');   
    about.classList.remove("aboutClass");
    cal.classList.toggle("calClass");
    time.classList.remove("timeClass");
    etc.classList.remove("etcClass");
};
// -- atcTime 메뉴 --
atcTime = function(){
    //메뉴 active 색 변경
    var activeA = document.getElementById('aboutActive');
    var activeC = document.getElementById('calActive');
    var activeT = document.getElementById('timeActive');
    var activeE = document.getElementById('etcActive'); 
    activeA.classList.remove("activeAbout");
    activeC.classList.remove("activeCal");
    activeT.classList.toggle("activeTime");
    activeE.classList.remove("activeCal");
    //숨긴 페이지 표시
    var about = document.getElementById('about');
    var cal = document.getElementById('atcCal');
    var time = document.getElementById('atcTime');
    var etc = document.getElementById('etc');   
    about.classList.remove("aboutClass");
    cal.classList.remove("calClass");
    time.classList.toggle("timeClass");
    etc.classList.remove("etcClass");
};
// -- etc 메뉴 --
etc = function(){
    //메뉴 active 색 변경
    var activeA = document.getElementById('aboutActive');
    var activeC = document.getElementById('calActive');
    var activeT = document.getElementById('timeActive');
    var activeE = document.getElementById('etcActive'); 
    activeA.classList.remove("activeAbout");
    activeC.classList.remove("activeCal");
    activeT.classList.remove("activeTime");
    activeE.classList.toggle("activeCal");
    //숨긴 페이지 표시
    var about = document.getElementById('about');
    var cal = document.getElementById('atcCal');
    var time = document.getElementById('atcTime');
    var etc = document.getElementById('etc');   
    about.classList.remove("aboutClass");
    cal.classList.remove("calClass");
    time.classList.remove("timeClass");
    etc.classList.toggle("etcClass");
};

//
window.onload = function() {
    about();
}

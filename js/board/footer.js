var today = new Date();
var todayYear = today.getFullYear();
var todayMonth = today.getMonth()+1;
var todayDate = today.getDate();
var todayDay = today.getDay();
if(todayDay == 1) todayDay = 'MON';
if(todayDay == 2) todayDay = 'TUE';
if(todayDay == 3) todayDay = 'WED';
if(todayDay == 4) todayDay = 'THU';
if(todayDay == 5) todayDay = 'FRI';
if(todayDay == 6) todayDay = 'SAT';
if(todayDay == 0) todayDay = 'SUN';
footer.innerHTML=todayYear +" : "+ todayMonth +" : "+ todayDate + " : " +todayDay;


// [object Object]Sun Sep 22 2019 16:23:56 GMT+0900 (한국 표준시)
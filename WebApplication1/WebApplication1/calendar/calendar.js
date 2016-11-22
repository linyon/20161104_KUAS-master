//<script type="text/javascript">

var time = new Date();
var y = time.getFullYear();
var m = time.getMonth();
var d = time.getDate();

function montharr(m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11) {
  this[0] = m0;
  this[1] = m1;
  this[2] = m2;
  this[3] = m3;
  this[4] = m4;
  this[5] = m5;
  this[6] = m6;
  this[7] = m7;
  this[8] = m8;
  this[9] = m9;
  this[10] = m10;
  this[11] = m11;
}

function calendar(y,m,d,id,textBox) {
	var insideHTML = "";
	var monthNames = "JanFebMarAprMayJunJulAugSepOctNovDec";
	var today = new Date(y,m,d,0,0,0,0);
	var thisDay;
	var monthDays = new montharr(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	year = y;//today.getFullYear();
	thisDay = d;//today.getDate();
	//這裡要改！！！！！！！！！！！！！！！！！！！
	if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) monthDays[1] = 29;
	nDays = monthDays[m/*today.getMonth()*/];
	firstDay = today;
	firstDay.setDate(1); // works fine for most systems
	testMe = firstDay.getDate();
	if (testMe == 2) firstDay.setDate(0);
	startDay = firstDay.getDay();
	
	//月曆表格開始
	insideHTML+='<table class="calendarTable" width="140" border="0" cellspacing="0" cellpadding="2" ><TR>';
	
	//上個月下個月
	var mPrevious=m;
	var mNext=m;
	var yPrevious=y;
	var yNext=y;
	if(m==0){
		yPrevious--;
		mPrevious=11;
		mNext++;
	}
	else if(m==11){
		mPrevious--;
		yNext++;
		mNext=0;
	}
	else{
		mPrevious--;
		mNext++;
	}
	insideHTML+='<TD align="left"><a href="javascript:void(0);" onclick=selectDate('+yPrevious+','+mPrevious+','+d+','+'"'+id+'","'+textBox+'");return false;><B>←'+(mPrevious+1)+'月</a></TD>';
	insideHTML+='<TD align="right"><a href="javascript:void(0);" onclick=selectDate('+yNext+','+mNext+','+d+','+'"'+id+'","'+textBox+'");return false;><B>'+(mNext+1)+'月→</a></TD>';
	
	//上下月按鍵結束
	insideHTML+='</TR>';
	
	//月曆內容
	insideHTML+='<TR><TD colspan="2"><table class="calendarContent" width="140" border="0" cellspacing="1" cellpadding="2">';
	insideHTML+='<TR><th id="calendarPrint" colspan="7">';
	var dayNames = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
	var monthNames = new Array("1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月");
	var now = new Date(y,m,d,0,0,0,0);
	insideHTML +=now.getFullYear() + "年" + monthNames[now.getMonth()] + "" + now.getDate() + "日" + dayNames[now.getDay()];
	insideHTML +='</TH></TR><TR><TH id="calendarCell">日</TH>';
	insideHTML +='<TH id="calendarCell">一</TH>';
	insideHTML +='<TH id="calendarCell">二</TH>';
	insideHTML +='<TH id="calendarCell">三</TH>';
	insideHTML +='<TH id="calendarCell">四</TH>';
	insideHTML +='<TH id="calendarCell">五</TH>';
	insideHTML +='<TH id="calendarCell">六</TH>';
	insideHTML +='</TR><TR>';
	column = 0;
	for (i=0; i<startDay; i++) {
		insideHTML +="\n<TD><FONT style=font-size:9pt> </FONT></TD>";
		column++;
	}
	for (i=1; i<=nDays; i++) {
		if (i == thisDay) {
			insideHTML +='</TD><TD id="calendarChecked" align="center"><B><a href="javascript:void(0);" onclick=selectDate('+y+','+m+','+i+','+'"'+id+'","'+textBox+'");return false;>';
		} 
		else {
			insideHTML +='</TD><TD id="calandarSelect" align="center"><a href="javascript:void(0);" onclick=selectDate('+y+','+m+','+i+','+'"'+id+'","'+textBox+'");return false;>';
		}
		insideHTML += i;//day print here
		//if (i == thisDay) {
		insideHTML +='</a></TD>';
		//}
		column++;
		if (column == 7) {
		   insideHTML +="<TR>";
		   column = 0;
		}
	}
	
	//月曆內容結束 月曆表格結束
	insideHTML +='</TABLE></TD></TR></TABLE>';
	
	//寫入HTML內容到DIV裡
	document.getElementById(id).innerHTML = insideHTML;
	
	m++;
	if(m<10){
		m="0"+m;
	}
	if(d<10){
		d="0"+d;
	}
		
	return (y+"-"+m+"-"+d);
}

function output(str,id){
	document.getElementById(id).value=str;
}

function selectDate(y,m,d,div_id,input_id){
	var date;
	date=calendar(y,m,d,div_id,input_id);
	output(date,input_id);
}
/*</script>*/
var introUI={
	
	login : i=>{
		return '<div id="container">'
		+'<div id="login_box">'
		+	'<img src="'+i+'/login.jpg" alt="" /><br />'
		+	'<span id="login_id">ID</span>'
		+	'<input id="login_input" type="text"  /> <br />'
		+	'<span id="login_pass">PASSWORD</span> '
		+	'<input type="text"  /> <br />'
		+'</div>'
	+'</div>';
	},
	navbar : ()=>{
		return '<nav class="navbar navbar-inverse">'
		+'  <div class="container-fluid">'
		+'    <div class="navbar-header">'
		+'      <a class="navbar-brand" href="#">GMS</a>'
		+'    </div>'
		+'    <ul class="nav navbar-nav">'
		+'      <li class="active"><a ><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">회원관리 <span class="caret"></span></a>'
		+'          	</span></a>'
		+'          <ul id="navbar_ul_stu" class="dropdown-menu">'
		+'            <li><a>학생추가</a></li>'
		+'            <li><a>학생목록</a></li>'
		+'            <li><a>학생조회</a></li>'
		+'            <li></li>'
		+'            <li><a>학생삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_grade" class="dropdown-menu">'
		+'            <li><a>성적추가</a></li>'
		+'            <li><a>성적목록</a></li>'
		+'            <li><a>성적조회</a></li>'
		+'            <li></li>'
		+'            <li><a>성적삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시판관리 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a>게시글추가</a></li>'
		+'            <li><a>게시글목록</a></li>'
		+'            <li><a>게시글조회</a></li>'
		+'            <li></li>'
		+'            <li><a>게시글삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수 열 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a id="arithBtn">등차수열</a></li>'
		+'            <li><a id="switchBtn">스위치수열</a></li>'
		+'            <li><a id="diffBtn">등비수열</a></li>'
		+'            <li><a id="facBtn">팩토리얼</a></li>'
		+'            <li><a id="fiboBtn">피보나치</a></li>'
		+'          </ul>'
		+'        </li>'
		+'		<li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">배열 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'	           <li><a id="selBtn">선택 정렬</a></li>'
		+'            <li><a id="burbleBtn">버블 정렬</a></li>'
		+'            <li><a id="insertBtn">삽입 정렬</a></li>'
		+'            <li><a id="rankBtn">석차 정렬</a></li>'
		+'            <li><a id="binBtn">이분검색</a></li>'
		+'            <li><a id="mergeBtn">병합</a></li>'
		+'            <li><a id="stackBtn">스택</a></li>'
		+'          </ul>'
		+'        </li>'
		+'		<li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">행열 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'	           <li><a id="selBtn">기본 5행 5열</a></li>'
		+'            <li><a id="burbleBtn">직각삼각형</a></li>'
		+'            <li><a id="insertBtn">지그재그</a></li>'
		+'            <li><a id="rankBtn">다이아몬드</a></li>'
		+'            <li><a id="binBtn">모래시계</a></li>'
		+'            <li><a id="mergeBtn">오른쪽 빈삼각형</a></li>'
		+'            <li><a id="stackBtn">이등변삼각형</a></li>'
		+'            <li><a id="stackBtn">90도 회전</a></li>'
		+'            <li><a id="stackBtn">달팽이</a></li>'
		+'            <li><a id="stackBtn">대각선채우기</a></li>'
		+'            <li><a id="stackBtn">마방진</a></li>'
		+'            <li><a id="stackBtn">행렬변환</a></li>'
		+'          </ul>'
		+'        </li>'
		+'    </ul>'
		+'    <span class="float-right">${user.name} &nbsp;'
		+'    	<a id="logout" >로그아웃</a></span>'
		+'  </div>'
		+'</nav>';
	}
};
//div : () =>{return $();}, -> dom리턴 		div : () =>{return '';},string리턴
var compUI={
	div : (x)=> {return $('<div/>',{id:x});},
	image : (x,y)=>{return $('<img/>',{id : x,src : y});},
	input : (x,y)=>{return $('<input/>',{id : x,type : y});},
	h1 : x => {return $('<h1/>',{id:x});},
	span : x=>{return $('<span/>',{id:x});}
	
}
var algoUI={
	series : ()=>{
		return '<div id="content">'
			+'<h1>시작값부터 끝값까지 등차수열의 합</h1>'
			+'<span id="start_txt">시작값: &nbsp;&nbsp;</span>'
			+'<br/><span id="end_txt">끝   값:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br/>'
			+'<div id="result"></div>';
	}	
};
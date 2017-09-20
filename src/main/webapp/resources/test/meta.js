var meta=meta || {};
meta.common=(()=>{
	 var init=(ctx)=>{
		/* alert('이동 :'+$$());*/
		onCreate();
		
		meta.session.init(ctx);
		/* alert('이동 :'+$$());
		 alert('이동 :'+css());
		 alert('이동 :'+js());
		 alert('이동 :'+img());*/
		 meta.index.init();
	 };
	 var onCreate=()=>{
		 setContentView();
	 };
	 var setContentView=()=>{
		 
	 };
	 return{
		 init:init
	 }
})();
meta.index=(()=>{
	var $wrapper,$navbar,$contrainer,ctx,img,js,css,temp,algo;
	var init=()=>{
		meta.ui.init();
		ctx=$$('x');
		js=$$('j');
		img=$$('i');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate=function(){
		$container=$('#container');
	
		$.getScript(temp,x =>{
			var $image=$('<img>',
					introUI.loading(img)
			);
			$container.append($image);
		});
		var $btn=$('<input>',//dom객체 :string값을 인지하지않는다.
				{
		 			id:'button',
					type:'button',
					value:'버튼'
				}); //속성은 json으로 제어
	
		$container.append($btn);
		$('#button').click(()=>{ //function() <- 명칭은 이벤트핸들러, 콜백
			alert('버튼 클릭');
			$container.empty();
			meta.ui.navbar();
			meta.navbar.init();
			//meta.auth.init();
			//meta.ui.switchSeries();
			meta.ui.arithmetic();
			$('#aBtn').click(()=>{
				$.getScript(algo,(x1,x2)=>{
					$('#result').text('결과 :'+series.arithmetic(
							$('#start_num').val(),$('#end_num').val()));
					});
				});
				
		
		});
	};
	
	return {
		init:init
		
	}
})();

/*meta.algo={
		arithmetic : (s,e)=>{  //(s,e)=>{ 람다식 방식  function대신 => 를 추가
			var start=s*1;
			var end_num=e*1;
			var sum=0;
			for(var i=start;i<=end_num;i++){
				sum+=i;
			}
			return sum;

	}
		arithmetic : function(s,e){
				var start=s*1;
				var end_num=e*1;
				var sum=0;
				for(var i=start;i<=end_num;i++){
					sum+=i;
				}
				return sum;

		},
		switchSeries : () => {
			var sum=0,i=0;
			 var sw=0;
			   do {
			  i++;
			   if(sw==0) {
				   sum+=i;
			      sw=1;
			   }else {
				   sum-=i;
			      sw=0;
			   }
			   }while(i<100);
			   return sum;
		},
		diffSeries : ()=>{
			var diff=1,sum=0,i=1;
			
			for(var j=0;j<100;j++){
				
				sum+=i;
				i=i+diff;
				diff=diff+1;
				
				
			}return sum;
			
		},
		fract : (e) => {
			var i=1,j=1,sum=1;
			var num=e*1;
			for(i=2;i<=num;i++){
				j=j*i;
				sum=sum+j;
			}return sum;
		},
		fibo :(e)=>{
			var Num1=1,Num2=1,temp=0,sum=Num1+Num2;
			var num=e*1;
			
			for(var i=1; i<num; i++)

	         {
	                  temp += sum; //피보나치 항의 합
	                  sum = Num1 + Num2; //피보나치 다음 항 계산
	                  Num1 = Num2;
	                  Num2 = sum;
	         }        
			return temp;
		}
};*/

meta.auth=(function(){
	var $wrapper,img,ctx,js,css,value,id;
	var init=function(){
		onCreate();
		
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		$wrapper=$('#wrapper');
		img=$$('i');
		ctx=$$('x');
		css=$$('c');
		js=$$('j');
		
		loginView();
	};
	var loginView=function(){
		
		var ui=
		'<div id="container">'
        +'<img src="'+img+'/login.jpg" alt="" /><br /><br>'
        +'<form  id="login_box" name="login_box" > '
        +'<span id="span-form">ID</span> '
        +'<input type="text" id="login_id" name="id" placeholder="ID는 숫자 포함 8자 이내" value="han" /><br>' 
        +'<span id="span-form">PASSWORD</span>'
        +'<input  id="login_password" name="pass" type="password" placeholder="비밀번호" value="1" /><br><br>'
        +'</form>'
        +'</div>'
        +'</div>';
		$wrapper.append(ui);
		/*
		 	$('#login_input').after(meta.component.button({
				type:'button',
				id:'login_Btn',
				value:'로그인'
			}));
		 * */
		$('#login_box').append(meta.component.button({
				type:'button',
				id:'login_Btn',
				value:'로그인'
		}));
		$('#login_box').append(meta.component.button({type:'reset',id:'cancel_Btn',value:'취소'}));
	
	};
	return{init:init,loginView:loginView};
})();

meta.navbar=(function(){
	var algo,js,temp;
    var init=function(){
       js=$$('j');
       algo=js+'/algo.js';
       temp=js+'/template.js';
       onCreate();
    };
    var onCreate=function(){
       setContentView();
       $$.getScript(temp,function(){
			var $u1=$("#navbar_ul_stu");
			var $u2=$("#navbar_ul_grade");
			var $u3=$("#navbar_ul_board");
			$u1.addClass("dropdown-menu");
			$u2.addClass("dropdown-menu");
			$u3.addClass("dropdown-menu");
			$('#navbar').html(introUI.navbar());
			$('#container').html(algoUI.series());
			$('#start_txt').after(compUI.input('start','text'));
			$('#start').attr('placeholder','시작값');
			$('#end_txt').after(compUI.input('end','text'));
			$('#end').attr('placeholder','끝값');
			$('#result').before(compUI.input('resultBtn','button'));
			$('#resultBtn').val('결과보기');
			$('#resultBtn').click(()=>{
				$.getScript(algo,(x1,x2)=>{
					$('#result').text('결과 : '+
							series.arithmetic(
									$('#start').val(),
									$('#end').val()
							));
				});
			});
			$('.dropdown-menu a').eq(0).on('click',function(){
				//app.controller.moveTo('member','member_add');
			});
			$('.dropdown-menu a').eq(1).on('click',function(){
				//app.member.list(1);
			});
			$('.dropdown-menu a').eq(2).on('click',function(){
				//app.controller.moveTo('member','member_detail');
			});
			$('.dropdown-menu a').eq(3).on('click',function(){
				//app.controller.deleteTarget('hong','member','member_delete');
			});
			$('.dropdown-menu a').eq(4).on('click',function(){
				//app.controller.moveTo('grade','grade_add');
			});
			$('.dropdown-menu a').eq(5).on('click',function(){
				//app.controller.moveTo('hong','grade','grade_list');
			});
			$('.dropdown-menu a').eq(6).on('click',function(){
				//app.controller.moveTo('grade','grade_detail');
			});
			$('.dropdown-menu a').eq(7).on('click',function(){
				//app.controller.deleteTarget('hong','grade','grade_delete');
			});
			$('.dropdown-menu a').eq(8).on('click',function(){
				//app.controller.moveTo('board','board_write');
			});
			$('.dropdown-menu a').eq(9).on('click',function(){
				//app.controller.moveTo('board','board_list');
			});
			$('.dropdown-menu a').eq(10).on('click',function(){
				//app.controller.moveTo('board','board_detail');
			});
			$('.dropdown-menu a').eq(11).on('click',function(){
				//app.controller.deleteTarget('hong','board','board_delete');
			});
			$('#arithBtn').on('click',function(){
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('등차수열의 합');
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x1,x2)=>{
						$('#result').text('결과 : '+
								series.arithmetic(
										$('#start').val(),
										$('#end').val()
								));
					});
				});
			});
			$('#switchBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('스위치수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.switchSeries());
					});
				})
			});
			$('#diffBtn').click(()=>{
				alert('계차수열버튼 클릭');
				$container.empty();
				meta.ui.arithmetic();
				$('h1').empty();
				$('h1').html('계차수열');
				$('#start_num').val('1').attr('readonly','true');
				$('#end_num').val('100').attr('readonly','true');
				$('#aBtn').on('click',()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과 :'+series.diffSeries());
					});
					});
					
			});
			$('#facBtn').click(()=>{
				alert('팩토리버튼 클릭');
				$container.empty();
				meta.ui.arithmetic();
				$('h1').empty();
				$('h1').html('팩토리얼 수열');
				$('#start').empty();
				$('#start_num').remove();
				/*$('#start_num').val('1').attr('readonly','true');*/
				$('#end_num').val();
				$('#aBtn').on('click',()=>{
					$.getScript(algo,(x1)=>{
						$('#result').text('결과 :'+series.fract($('#end_num').val()));
					});
					});
					
			});
			$('#fiboBtn').click(()=>{
				alert('피보나치버튼 클릭');
				$container.empty();
				meta.ui.arithmetic();
				$('h1').empty();
				$('h1').html('피보나치 수열');
				$('#start').empty();
				$('#start_num').remove();
				$('#start_num').val('1').attr('readonly','true');
				$('#end_num').val();
				$('#aBtn').on('click',()=>{
					
				$.getScript(algo,(x1)=>{
					$('#result').text('결과 :'+series.fibo($('#end_num').val()));
				});
				});
				
			});
	       $('#home a').on('click',function(){
	    	   
	           location.href=app.path.ctx()+"/auth/main";
	       });
	       $('#logout').on('click',function(){
	    	   app.controller.moveTo('common','home'); 
	       });
			
		});
	
		
    };
    var setContentView=function(){
    	
    	 var home=$("#home");
         var logout=$("#logout");
     
    };
    return {
       init : init
    };
 })();
meta.ui=(function(){
	var $wrapper,$container,$navbar,img,ctx,js,css,name,temp;
	var init=function(){
		$wrapper=$('#wrapper');
		$container=$('#container');
		$navbar=$('#navbar');
		img=$$('i');
		
		//arithmetic();
	};
	var navbar= function(){
		/*$navbar.html(
				'<nav class="navbar navbar-inverse">'
				+'  <div class="container-fluid">'
				+'    <div class="navbar-header">'
				+'      <a class="navbar-brand" href="#">GMS</a>'
				+'   </div>'
				+'    <ul class="nav navbar-nav">'
				+'     <li id=home class="active"><a ><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
				+'      <li class="dropdown">'
				+'	          <a href="#" class="dropdown-toggle" '
				+'          	data-toggle="dropdown" role="button" '
				+'          	aria-haspopup="true" '
				+'          	aria-expanded="false">회원관리 <span class="caret">'
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
				+'	           <li><a>게시글추가</a></li>'
				+'            <li><a>게시글목록</a></li>'
				+'            <li><a>게시글조회</a></li>'
				+'            <li></li>'
				+'            <li><a>게시글삭제</a></li>'
				+'          </ul>'
				+'        </li>'
				+'<li class="dropdown">'
				+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수열 <span class="caret"></span></a>'
				+'          <ul id="navbar_ul_board" class="dropdown-menu">'
				+'	           <li><a id="arithBtn">등차 수열</a></li>'
				+'            <li><a id="switchBtn">스위치 수열</a></li>'
				+'            <li><a id="diffBtn">등비수열</a></li>'
				+'            <li><a id="facBtn">팩토리 수열</a></li>'
				+'            <li><a id="fiboBtn">피보나치</a></li>'
				+'          </ul>'
				+'        </li>'
				+'    </ul>'
				+'    <span class="float-right">${user.name} &nbsp;'
				+'    	<a id="logout" class="logout"  style="color: white">로그아웃</a></span>'
				+'  </div>'
				+'</nav>	');*/
	}
	var arithmetic=()=>{
		//$wrapper=$('#wrapper');
		// 1부터 100까지 등차수열의 합
	/*	var content='<div id="content">'
			+'<h1>등차수열의 합</h1>'
			+'<span id="start">시작값&nbsp;</span><br>'
			+'<span id="end">마지막 값&nbsp;</span><br>'
			+'<span id="result"></div><br>'
			+'</div>'
			;*/
		js=$$('j');
		temp=js+'/template.js';
		$.getScript(temp,()=>{
			$('#navbar').html(algo.series());
			$container.append(content);	
			
			$('#start').after(meta.component.input({
				type:'text',
				id:'start_num'
				
			}));
			$('#end').after(meta.component.input({
				type:'text',
				id:'end_num'
				
			}));
			$('#end_num').after(meta.component.input({
				type:'button',
				id:'aBtn',
				value:'연산'
		}));
			
		});
		
		
	
	};
	
	return{
		init:init,arithmetic:arithmetic,navbar:navbar
	}
})();
// 메서드간의 공유하는 값이 없으면 이렇게 적용
meta.component=
{
		input:(json)=>{
			return btn=$('<input/>',json);
		       
		}
};

meta.session={
	init : (ctx)=>{
		sessionStorage.setItem('x',ctx);
		sessionStorage.setItem('j',ctx+'/resources/js');
		sessionStorage.setItem('c',ctx+'/resources/css');
		sessionStorage.setItem('i',ctx+'/resources/img');
	},getPath : (x)=>{
        return sessionStorage.getItem(x);
	}    
  };
var $$=(x)=>{return meta.session.getPath(x);};




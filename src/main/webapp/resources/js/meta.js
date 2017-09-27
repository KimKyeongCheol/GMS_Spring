var meta=meta || {};
meta.common=(function(){
	var init=function(ctx){
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){};
	return { init:init };
})();
meta.index=(function(){
	var $wrapper,$navbar,$container,ctx,img,js,css,
		temp,algo;
	var init=function(){
			
			js=$$('j');
			img=$$('i');
			temp=js+'/template.js';
			algo=js+'/algo.js';
			$navbar=$('#navbar');
			$container=$('#container');
			ctx=$$('x');
			onCreate();
		};
	var onCreate=function(){
		$.getScript(temp,(x,y)=>{
			compUI.div('content').css({'width':'30%'}).appendTo($container);
			$content=$('#content');
			
			compUI.image('loading',img+'/kkk.jpg').css({'width':'50%','margin':'0 auto'}).appendTo($content);
			
			/*$hBtn=$('#hBtn');
			compUI.span('algoBtn').html('알고리즘').addClass('label label-default').appendTo($hBtn)
			.click(()=>{
			});*/
			/*$container.append(compUI.div('content')).css({'width':'100%'});
			$('#content').css({'width':'50%','margin':'0 auto'}).append(compUI.image('loading',img+'/kkk.jpg'));
			*/
			//$container.append(compUI.image('loading',img+'/loading.gif'));
			
			$('#loading').after(compUI.h1('h-btn'));
			$('#h-btn').append(compUI.span('btn')).attr('display','inline');
			$('#btn').html('알고리즘').addClass('label label-default').css({'magin-left':'10px','width':'50%','margin':'0 auto'});
			$('#h-btn').append(compUI.span('btn2')).attr('display','inline');
			$('#btn2').html('회원관리').addClass('label label-primary').css({'magin-left':'10px','width':'50%','margin':'0 auto'});
			compUI.h1('h-btn').attr('display','inline').appendTo($content);
			$hBtn=$('#h-btn');
			//$('#h-btn').append(compUI.span('bbsBtn')).attr('display','inline');
			//$('#bbsBtn').html('게시판').addClass('label label-success').css({'magin-left':'10px','width':'50%','margin':'0 auto'});
			//$('#h-btn').append(compUI.span('btn4')).attr('display','inline');
			//$('#btn4').html('버튼').addClass('label label-info').css({'magin-left':'10px','width':'50%','margin':'0 auto'});
			//$('#h-btn').append(compUI.span('btn5')).attr('display','inline');
			//$('#btn5').html('버튼').addClass('label label-warning').css({'magin-left':'10px','width':'50%','margin':'0 auto'});
			//$('#h-btn').append(compUI.span('btn6')).attr('display','inline');
			$('#btn6').html('버튼').addClass('label label-danger').css({'magin-left':'10px','width':'50%','margin':'0 auto'});
			$('#btn').click(()=>{
				$container.empty();
				//meta.auth.init();	
				meta.navbar.init();
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x,y)=>{
						$('#result').text('결과 : '
								+series.arithmetic(
										$('#start').val(),
										$('#end').val()
						));
					});
				});
			});
			$('#btn2').click(()=>{
				alert('회원관리');
				
			});
			/*$('#btn3').click(()=>{
				alert('게시판');
				var url=ctx+'/get/board/list';
				$.getJSON(url,x=>{
					alert('x msg is '+x.msg);
				});
				
			});*/
			compUI.span('bbsBtn').html('게시판관리').addClass('label label-danger').css({'margin-left':'10px;'})
			.appendTo($hBtn).click(()=>{
				alert('게시판가기');
				meta.board.list();
				
				
			});
		});
	};
	return {init:init};
})();

meta.board=(()=>{
	var $container,ctx,js,img,temp,$navbar,$wrapper;
	var init=()=>{
		js=$$('j');
		img=$$('i');
		ctx=$$('x');
		$wrapper=$('#wrapper');
		temp=js+'/template.js';
		$navbar=$('#navbar');
		$container=$('#container');
		
		
	}
	var detail=(x)=>{
		init();
		alert('[선택한  시퀀스 값] :'+x);
		$.getJSON(ctx+'/get/board/'+x,data=>{
			alert('[data 값 ] :'+data.detail);
			$.getScript(temp,()=>{
				var pass='';
				var $container=$('#container');
				 $content.empty();
				compUI.div('#content').appendTo($content);
				$content=$('#content');
				$content.html(bbsUI.detail());
				$('#legend').html('게시물 보기');
				$('#fname').val(data.detail.title);   
				$('#lname').text(data.detail.id);   
				$('#message').val(data.detail.content);
				$('#regdate').text(data.detail.regdate); 
				$('#hitcount').text(data.detail.hitcount);
				var _seq=data.detail.articleSeq;
				var _title=$('#fname').val();
				var _write=$('#lname').val();
				var _message=$('#message').val();
				var _regdate=$('#regdate').val();
				var _hitcount=$('#hitcount').val();
				$('#confirmBtn').html('수정').click(e=>{
					e.preventDefault(); // 막다,방지하다 submit 버튼을 작동안시키고자 할때, 특정 이벤트 효과를 무력화시킴
					$('#legend').html('게시글 수정');
					$('#confirmBtn').html('확인').attr('id','updateBtn')
					.click(e=>{
						e.preventDefault();
						// ajax기본모양
						$.ajax({
							url : ctx+'/put/articles',
							method : 'post', //생략가능 생략하면 get방식
							dataType:'json',
							data : JSON.stringify({
								'articleSeq':_seq,
								'id':_write,
								'title':_title,
								'content':_message,
								'regdate':_regdate,
								'hitcount': _hitcount
								
							}), //중요
							contentType : 'application/json', //json중요 
							success : d=>{
								alert('ajax 통신 성공'+d.seq);
								detail(d.seq);
							}, //json으로 처리하는 이유는 확장성이 좋기때문이다.
							error : (x,s,m) =>{
								alert('글 수정시 에러 발생 :'+m);
							}
							
						});
						
					});
					$('#cancelBtn').html('취소').attr('type','reset').attr('id','resetBtn').removeAttr('data-toggle').removeAttr('data-target');
				});
				$('#cancelBtn')
				.attr('data-toggle','modal')
				.attr('data-target','#modal')
				.addClass('btn btn-primary')
				.html('삭제하기')
				.click(e=>{
					e.preventDefault(); 
					deleteArticle(x+','+pass);
				});
				
			
			});
			
		});
	
	}
	
	var list=(x)=>{
		init();
		$.getJSON(ctx+'/list/articles',data=>{
			var tb1=bbsUI.tb1();
		
	//$container.empty();

	/*$content.html(tb1).css({'width':'100%','margin':'0 auto'});*/
	
	/*var a=[
		{
			a:1,
			b:'한국인사',
			c:'안녕',
			d:'길동',
			e:'2017-09-10',
			f:10
		},
		{
			a:2,
			b:'미국인사',
			c:'hello',
			d:'cheol',
			e:'2017-09-22',
			f:99
		},
		{
			a:3,
			b:'중국인사',
			c:'니하오',
			d:'성소',
			e:'2017-09-10',
			f:10
		},
		{
			a:4,
			b:'일본인사',
			c:'곤니치와',
			d:'미나',
			e:'2017-05-10',
			f:10
		},
		{
			a:5,
			b:'태국인사',
			c:'사와디캅',
			d:'태국인',
			e:'2017-09-17',
			f:10
		}
	];*/
	
	var tr='';
	alert('[결과] :' +data.result);
	
	$.each(data.list,(i,j)=>{  //$.each(a,function(i,j){ a=array i=index(순서) j=object(json을 받는다.)  ,json배열 (javaScript 배열과 json배열은 다르다)
		tr+= '<tr style="height:25px;"> '
		+' 			<th style="width:5%;text-align:center;">'+ j.articleSeq+'</th> '
		+' 			<th style="width:45%;text-align:center;"><a onclick="meta.board.detail('+j.articleSeq+')">'+j.title +'</a></th> '
		+'			<th style="width:13%;text-align:center;">'+j.content+'</th> '
		+'			<th style="width:15%;text-align:center;">'+ j.id+'</th> '
		+' 			<th style="width:12%;text-align:center;">'+j.regdate +'</th> '
		+' 			<th style="width:10%;text-align:center;">'+ j.hitcount+'</th> '
		+' 		</tr> ';
	});
	
	console.log('tr : ' +tr);
	/*$content.html(tb1).css({'width':'50%','margin':'0 auto'});
	$('#tbody').html(tr);
	$content.append(bbsUI.pagination());*/
	 $('#content').empty();
	
		$navbar.append(bbsUI.search()).css({'width':'50%','margin':'0 auto'});
     $content.html(tb1).css({'width':'50%','margin':'0 auto'});
     $('#tbody').html(tr);
     
     $('#total').append(data.total.count+'개').css({'color':'red','margin':'0 auto'});
     $('#total').append(bbsUI.button());
     $('#writeBtn').click(e=>{
    	
    	meta.board.write();
     });
     $content.append(bbsUI.pagination());
  

	});
	}
	var update=(x)=>{
		alert('업데이트');
		 $content.empty();
		 detail(x);
		 $('#legend').text('수정');
	}
	var write = ()=>{
		init();
		$.getScript(temp,()=>{
				var $container=$('#container');
				compUI.div('#content').appendTo($content);
				$content=$('#content');
				$content.html(bbsUI.detail());
				$('#confirmBtn').html('수정').click(e=>{
					e.preventDefault(); // 막다,방지하다 submit 버튼을 작동안시키고자 할때, 특정 이벤트 효과를 무력화시킴
					detail(x);
				});
				
		});
	}
	var deleteArticle=()=>{
		alert('삭제 클릭');
	}
	return {init:init,detail:detail,write:write,deleteArticle:deleteArticle,update:update,list:list}
})();

meta.auth=(function(){
	var $wrapper,ctx,img,js,css,temp;
	var init=function(){
		onCreate();
		$wrapper=$('#wrapper');
		img=$$('i');
		js=$$('j');
		temp=js+'/template.js';
	};
	var onCreate=function(){setContentView();};
	var setContentView=function(){
		$.getScript(temp,(i)=>{
			$wrapper.append(intro.login(img));
			$('#login_input').after(meta.comp.input(
					{
						type : 'button',
						id : 'login_btn',
						value : '로그인'
					}
				));
				$('#login_box').append(meta.comp.input(
					{
						type : 'button',
						id : 'cancel_btn',
						value : '취소'
					}
				));
		});
		
	};
	var joinView=function(){};
	return {
		init : init
	};
})();
meta.navbar=(function(){
	var algo,js,temp,$container;
	var init=function(){
		js=$$('j');
		$container=$('#container');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		onCreate();
		
		/*algo=js+'/algo.js';*/
		
	};
	var onCreate=function(){
		$.getScript(temp,function(){
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
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('계차수열버튼 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과 :'+series.diffSeries());
					});
					});
					
			});
			$('#facBtn').click(()=>{
				$container.html(algoUI.series());
				
				$('#start').empty();
				$('#start_txt').remove();
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','임의의 값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('팩토리버튼  합');
				$('#end').val;
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x1)=>{
						$('#result').text('결과 :'+series.fract($('#end').val()));
					});
					});
					
			});
			$('#fiboBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start').empty();
				$('#start_txt').remove();
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','임의의 값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('피보나치   합');
				$('#end').val;
				$('#resultBtn').click(()=>{
				$.getScript(algo,(x1)=>{
					$('#result').text('결과 :'+series.fibo($('#end').val()));
				});
				});
				
			});
			$('#selBtn').click(()=>{
				var index=-1;
				var array=new Array();
				$container.html(algoUI.series());
				$('#start').empty();
				$('#start_txt').remove();
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','임의의 값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('선택정렬');
				$('#end').val;
				$('#resultBtn').click((x)=>{
					index++;
					array[index]=$('#end').val();
					$('#end').val("");
					if(index==4){
				$.getScript(algo,(x1)=>{
					$('#result').text('결과 :'+sort.select(array));
				});
				}
				});
				
			});
			$('#burbleBtn').click(()=>{
				var index=-1;
				var array=new Array();
				$container.html(algoUI.series());
				$('#start').empty();
				$('#start_txt').remove();
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','임의의 값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('버블정렬');
				$('#end').val;
				$('#resultBtn').click((x)=>{
					index++;
					array[index]=$('#end').val();
					$('#end').val("");
					if(index==4){
				$.getScript(algo,(x)=>{
					$('#result').text('결과 :'+sort.burble(array));
				});
				}
				});
			});
			$('#insertBtn').click(()=>{
				var index=-1;
				var array=new Array();
				$container.html(algoUI.series());
				$('#start').empty();
				$('#start_txt').remove();
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','임의의 값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('삽입정렬');
				$('#end').val;
				$('#resultBtn').click((x)=>{
					index++;
					array[index]=$('#end').val();
					$('#end').val("");
					if(index==4){
				$.getScript(algo,()=>{
					$('#result').text('결과 :'+sort.insertion(array));
				});
				}
				});
			});
			
			
			
		});
	};

	return {init:init};
})();


meta.session=
	{
	   init : (x)=>{
				sessionStorage.setItem('x',x);
				sessionStorage.setItem('j',x+'/resources/js');
				sessionStorage.setItem('c',x+'/resources/css');
				sessionStorage.setItem('i',x+'/resources/img');
	   		  },
	   getPath : (x)=>{
				return sessionStorage.getItem(x);
	   		  }
	};
var $$= function(x){return meta.session.getPath(x);};
			











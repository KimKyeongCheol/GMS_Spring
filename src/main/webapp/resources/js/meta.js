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
			temp=js+'/template.js';
			algo=js+'/algo.js';
			$navbar=$('#navbar');
			$container=$('#container');
			img=$$('i');
			onCreate();
		};
	var onCreate=function(){
		$.getScript(temp,(x,y)=>{
			$container.append(compUI.div('content')).css({'width':'100%'});
			$('#content').css({'width':'50%','margin':'0 auto'}).append(compUI.image('loading',img+'/kkk.jpg'));
			
			//$container.append(compUI.image('loading',img+'/loading.gif'));
			$('#loading').after(compUI.h1('h-btn'));
			$('#h-btn').append(compUI.span('btn')).attr('display','inline');
			$('#btn').html('알고리즘').addClass('label label-default').css({'magin-left':'10px','width':'50%','margin':'0 auto'});
			$('#h-btn').append(compUI.span('btn2')).attr('display','inline');
			$('#btn2').html('회원관리').addClass('label label-primary').css({'magin-left':'10px','width':'50%','margin':'0 auto'});
			$('#h-btn').append(compUI.span('btn3')).attr('display','inline');
			$('#btn3').html('게시판').addClass('label label-success').css({'magin-left':'10px','width':'50%','margin':'0 auto'});
			$('#h-btn').append(compUI.span('btn4')).attr('display','inline');
			$('#btn4').html('버튼').addClass('label label-info').css({'magin-left':'10px','width':'50%','margin':'0 auto'});
			$('#h-btn').append(compUI.span('btn5')).attr('display','inline');
			$('#btn5').html('버튼').addClass('label label-warning').css({'magin-left':'10px','width':'50%','margin':'0 auto'});
			$('#h-btn').append(compUI.span('btn6')).attr('display','inline');
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
			$('#btn3').click(()=>{
				alert('게시판');
				
			});
		});
		};
	return {init:init};
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
			










